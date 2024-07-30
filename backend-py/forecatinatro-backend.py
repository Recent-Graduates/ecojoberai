from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flasgger import Swagger
import requests
from datetime import datetime, timedelta

app = Flask(__name__)
api = Api(app)
swagger = Swagger(app)

BASE_URL = 'https://api.electricitymap.org/v3'

def get_zones():
    response = requests.get(f'{BASE_URL}/zones')
    return response.json()

def get_carbon_intensity_forecast(zone):
    headers = {
        'auth-token': 'I6xyTJpxGChop'
    }
    response = requests.get(f'{BASE_URL}/carbon-intensity/forecast/?{zone}', headers=headers)
    print(response)
    return response.json()

class BestTime(Resource):
    def get(self):
        """
        Get the best time with the lowest carbon intensity
        ---
        parameters:
          - name: zone
            in: query
            type: string
            required: true
            description: The zone to get the carbon intensity forecast for
        responses:
          200:
            description: Successful response
            schema:
              type: object
              properties:
                best_time:
                  type: string
                  description: The best time with the lowest carbon intensity
                carbon_intensity:
                  type: number
                  description: The carbon intensity at the best time
          400:
            description: Invalid request
        """
        zone = request.args.get('zone')
        
        print(zone)
        
        if not zone:
            return {'error': 'Zone parameter is required'}, 400

        data = get_carbon_intensity_forecast(zone)
        
        print(data)
        
        if 'forecast' not in data:
            return {'error': 'Invalid zone or no data available'}, 400
        
        forecast = data['forecast']
        now = datetime.utcnow()
        next_24_hours = [f for f in forecast if now <= datetime.fromisoformat(f['datetime'][:-1]) < now + timedelta(hours=24)]
        
        if not next_24_hours:
            return {'error': 'No forecast data available for the next 24 hours'}, 400
        
        best_time_forecast = min(next_24_hours, key=lambda x: x['carbonIntensity'])
        
        return {
            'best_time': best_time_forecast['datetime'],
            'carbon_intensity': best_time_forecast['carbonIntensity']
        }

class Zones(Resource):
    def get(self):
        """
        Get the list of zones
        ---
        responses:
          200:
            description: Successful response
            schema:
              type: object
              additionalProperties:
                type: object
                properties:
                  zoneName:
                    type: string
                  countryName:
                    type: string
        """
        data = get_zones()
        return data

api.add_resource(BestTime, '/best-time')
api.add_resource(Zones, '/zones')

if __name__ == '__main__':
    app.run(debug=True)

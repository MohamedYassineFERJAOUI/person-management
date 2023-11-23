import { Router } from "express";
import * as personController from '../controllers/personController.js'
const router = Router();
//Add a new person record
router.route('/persons').post(personController.createPerson);
//Retrieve all person records
router.route('/persons').get(personController.getPersons);
//Update a person record
router.route('/persons/:id').put(personController.updatePerson);
//Retrieve a specific person by ID
router.route('/persons/:id').get(personController.getPerson);
//Delete a person record
router.route('/persons/:id').delete(personController.deletePerson);
//Retrieve persons records or filter by name or age
router.route('/person/filter').get(personController.filterPersons);
export default router;
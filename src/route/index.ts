import * as express from 'express'
import ArtikelController from '../controllers/ArtikelController'
import PaslonController from '../controllers/PaslonController'
import PartaiController from '../controllers/PartaiController'
import UploadFile from '../middlewares/UploadFile'
import AuthController from '../controllers/AuthController'
import AuthMiddleware from '../middlewares/Auth';
import VoterController from '../controllers/VoterController'
import UserController from '../controllers/UserController'

const router = express.Router()

//Artikel
router.post('/artikel', AuthMiddleware.Auth, UploadFile.upload("imageArticle"), ArtikelController.create)
router.get('/artikel', AuthMiddleware.Auth, ArtikelController.getAll)
router.get('/artikel/:id', AuthMiddleware.Auth, ArtikelController.getOne)
router.delete('/artikel/:id', AuthMiddleware.Auth, ArtikelController.delete)
router.patch("/artikel/:id", UploadFile.upload("imageArticle"), ArtikelController.update)
router.get('/artikel/:id', ArtikelController.getOne)
router.get('/artikel-card', ArtikelController.getAllArticleCard)
router.get('/artikel-card/:id', ArtikelController.getOneArticleCard)

//Paslon
router.post('/paslon', AuthMiddleware.Auth, UploadFile.upload("imagePaslon"), PaslonController.create)
router.get('/paslon', AuthMiddleware.Auth, PaslonController.getAll)
router.get('/paslon/:id', AuthMiddleware.Auth, PaslonController.getOne)
router.delete('/paslon/:id', AuthMiddleware.Auth, PaslonController.delete)
router.patch("/paslon/:id", AuthMiddleware.Auth, UploadFile.upload("imagePaslon"), PaslonController.update)

//Partai
router.post('/partai', AuthMiddleware.Auth, UploadFile.upload("imagePartai"), PartaiController.create)
router.get('/partai', PartaiController.getAll)
router.get('/partai/:id', AuthMiddleware.Auth, PartaiController.getOne)
router.delete('/partai/:id', AuthMiddleware.Auth, PartaiController.delete)
router.patch("/partai/:id", AuthMiddleware.Auth, UploadFile.upload("imagePartai"), PartaiController.update)

//Voter
router.post('/vote', AuthMiddleware.Auth, VoterController.create)
router.get('/vote', AuthMiddleware.Auth, VoterController.getAll)

//User
router.delete("/user/:id", UserController.delete)

//Auth
router.post("/auth/register", AuthController.register)
router.post("/auth/login", AuthController.login)

export default router

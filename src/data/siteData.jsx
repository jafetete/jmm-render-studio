import React from 'react';
import { Armchair, FileText, Monitor, PenTool, Ruler } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  { id: 1, category: 'residential', title: 'Casa Chris', year: '2023', area: '350 m²', location: 'Golfito, Puntarenas', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083612/casa-chris-portada_o74e1f.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083612/casa-chris-1_zsvvkl.png', desc: { es: 'Vista Exterior - Fachada Principal', en: 'Exterior View - Main Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083611/casa-chris-2_ntp55i.png', desc: { es: 'Vista Interior - Dormitorio con balcón', en: 'Interior View - Bedroom with balcony' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083614/casa-chris-3_d4twma.png', desc: { es: 'Vista Exterior - Fachada trasera y área social', en: 'Exterior View - Rear facade and social area' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083611/casa-chris-4_xzxfps.png', desc: { es: 'Vista Exterior - Área social y terraza', en: 'Exterior View - Social area and terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083609/casa-chris-5_bitxs7.png', desc: { es: 'Vista Interior - Dormitorio con acabados de madera', en: 'Interior View - Bedroom with wood finishes' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083609/casa-chris-6_ttw6an.png', desc: { es: 'Vista Interior - Sala de estar de doble altura', en: 'Interior View - Double-height living room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083609/casa-chris-7_d6kol1.png', desc: { es: 'Vista Interior - Área de TV', en: 'Interior View - TV area' } }
  ] },
  { id: 2, category: 'residential', title: 'Barak Lot C-08', year: '2024', area: '420 m²', location: 'Playa Grande', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083612/barak-lot-portada_jk4wuy.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083615/barak-lot-1_t860l0.png', desc: { es: 'Vista Exterior - Fachada trasera y piscina', en: 'Exterior View - Rear facade and pool' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083614/barak-lot-2_rrdfor.png', desc: { es: 'Vista Exterior - Terraza azotea nocturna', en: 'Exterior View - Nighttime rooftop terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083614/barak-lot-3_amobhn.png', desc: { es: 'Vista Interior - Dormitorio principal', en: 'Interior View - Master bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083615/barak-lot-4_mpouvt.png', desc: { es: 'Vista Interior - Dormitorio principal', en: 'Interior View - Master bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083614/barak-lot-5_oxl8cf.png', desc: { es: 'Vista Exterior - Terraza azotea de día', en: 'Exterior View - Daytime rooftop terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083614/barak-lot-6_gaunaa.png', desc: { es: 'Vista Exterior - Balcón dormitorio principal', en: 'Exterior View - Master bedroom balcony' } }
  ] },
  { id: 3, category: 'residential', title: 'Villa Italia', year: '2022', area: '500 m²', location: 'Alajuela', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083621/villa-italia-portada_mly5pd.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083623/villa-italia-1_sne7hs.png', desc: { es: 'Vista Exterior - Fachada Principal', en: 'Exterior View - Main Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083623/villa-italia-2_wutohf.png', desc: { es: 'Vista Interior - Dormitorio principal', en: 'Interior View - Master bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083622/villa-italia-3_pdq37s.png', desc: { es: 'Vista Interior - Habitación casa de invitados', en: 'Interior View - Guest house room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083622/villa-italia-4_dxutfg.png', desc: { es: 'Vista Interior - Cocina', en: 'Interior View - Kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083622/villa-italia-5_qjoyzr.png', desc: { es: 'Vista Exterior - Fuente en atrio y terraza trasera', en: 'Exterior View - Atrium fountain and rear terrace' } }
  ] },
  { id: 4, category: 'residential', title: 'Hany Kitchen', year: '2025', area: '210 m²', location: 'Playa Hermosa', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083583/hany-kitchen-portada_hjugzv.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083582/hany-kitchen-1_wy3fbp.png', desc: { es: 'Vista Interior - Cocina y Área de Trabajo', en: 'Interior View - Kitchen and Workspace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083586/hany-kitchen-2_wah70a.png', desc: { es: 'Vista Interior - Opciones de materiales para cocina', en: 'Interior View - Kitchen material options' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083591/hany-kitchen-3_mvkibe.png', desc: { es: 'Vista Interior - Opciones de materiales para cocina', en: 'Interior View - Kitchen material options' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083581/hany-kitchen-4_gpygby.png', desc: { es: 'Vista Interior - Diseño de Gabinetes', en: 'Interior View - Cabinet Design' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083581/hany-kitchen-5_xqvwrg.png', desc: { es: 'Vista Interior - Vista Amplia de Ventanal', en: 'Interior View - Wide Window View' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083579/hany-kitchen-6_xwncu2.jpg', desc: { es: 'Visita Técnica - Levantamiento inicial en obra gris', en: 'Technical Visit - Initial site survey' } }
  ] },
  { id: 5, category: 'residential', title: "Sara's Bedroom", year: '2023', area: '10 m²', location: 'Escazú', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083624/saras-bedroom-portada_lgcrnr.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083625/saras-bedroom-1_zo9vha.png', desc: { es: 'Vista Interior - Dormitorio Completo', en: 'Interior View - Full Bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083625/saras-bedroom-2_cnfjbn.png', desc: { es: 'Vista Interior - Detalle de Cama', en: 'Interior View - Bed Detail' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083625/saras-bedroom-3_nozyte.png', desc: { es: 'Vista Interior - Perspectiva de Habitación', en: 'Interior View - Room Perspective' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083625/saras-bedroom-4_zxejfa.png', desc: { es: 'Vista Interior - Decoración de Habitación', en: 'Interior View - Room Decoration' } }
  ] },
  { id: 6, category: 'residential', title: 'Corey Dept', year: '2025', area: '310 m²', location: 'Santa Ana', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083600/coreys-dept-portada_oky17i.jpg', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083606/coreys-dept-1_vzfybo.png', desc: { es: 'Vista Interior - Dormitorio de Tonos Claros', en: 'Interior View - Light-toned Bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083605/coreys-dept-1b_dynp2p.jpg', desc: { es: 'Realidad - Materialización de Dormitorio Principal', en: 'Reality - Master Bedroom Realization' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083606/coreys-dept-2_dstg0t.jpg', desc: { es: 'Vista Interior - Perspectiva de Cocina', en: 'Interior View - Kitchen Perspective' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083605/coreys-dept-2b_vopszd.jpg', desc: { es: 'Realidad - Ejecución de Cocina a Medida', en: 'Reality - Custom Kitchen Execution' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083604/coreys-dept-3_kx4awx.jpg', desc: { es: 'Vista Interior - Cocina Integrada', en: 'Interior View - Integrated Kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083603/coreys-dept-4_hbojhf.jpg', desc: { es: 'Vista Interior - Sala y Comedor', en: 'Interior View - Living and Dining Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083603/coreys-dept-5_hct1al.jpg', desc: { es: 'Visita Técnica - Levantamiento y cocina original', en: 'Technical Visit - Survey and original kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083603/coreys-dept-7_yct11g.png', desc: { es: 'Vista Exterior - Terraza Techada con Vista', en: 'Exterior View - Covered Terrace with View' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083602/coreys-dept-8_mstkda.jpg', desc: { es: 'Realidad - Integración de Mobiliario Exterior', en: 'Reality - Outdoor Furniture Integration' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083601/coreys-dept-9_t1komu.png', desc: { es: 'Vista Interior - Sala de Estar Moderna', en: 'Interior View - Modern Living Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083601/coreys-dept-10_wzifxe.jpg', desc: { es: 'Visita Técnica - Terraza en construcción', en: 'Technical Visit - Terrace under construction' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083602/coreys-dept-11_rcaym8.png', desc: { es: 'Vista Interior - Baño completo habitación principal', en: 'Interior View - Master bedroom full bath' } }
  ] },
  { id: 7, category: 'residential', title: 'Casa Ingrid', year: '2026', area: '120 m² - 230 m²', location: 'Desamparados', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083606/casa-desamparados-portada_pysbiu.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083609/casa-desamparados-1_fj19cb.png', desc: { es: 'Vista Interior - Cocina y Comedor Amplio', en: 'Interior View - Spacious Kitchen and Dining' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083608/casa-desamparados-2_vgkjqj.png', desc: { es: 'Vista Interior - Sala desde Perspectiva Aérea', en: 'Interior View - Aerial Perspective Living Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083607/casa-desamparados-3_q3drtb.png', desc: { es: 'Vista Interior - Dormitorio con Luces LED', en: 'Interior View - Bedroom with LED Lights' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083608/casa-desamparados-4_klmv4l.png', desc: { es: 'Vista Interior - Diseño de Dormitorio Moderno', en: 'Interior View - Modern Bedroom Design' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083607/casa-desamparados-5_dxunyk.png', desc: { es: 'Vista Exterior - Terraza Exterior Nocturna', en: 'Exterior View - Nighttime Outdoor Terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083607/casa-desamparados-6_otdaxg.png', desc: { es: 'Vista Interior - Comedor con Detalles de Madera', en: 'Interior View - Dining Room with Wood Details' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083607/casa-desamparados-7_mwrddp.png', desc: { es: 'Vista Interior - Habitación', en: 'Interior View - Room' } }
  ] },
  { id: 8, category: 'comercial', title: 'Mixed Projects', year: '2020 - 2026', area: { es: 'Varios', en: 'Various' }, location: 'Costa Rica', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083634/mixed-projects-portada_sxwz4e.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083643/mixed-projects-1_y72aw0.png', desc: { es: 'Vista Interior - Cocina Integrada y Escaleras', en: 'Interior View - Integrated Kitchen and Stairs' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083642/mixed-projects-2_agk2nu.png', desc: { es: 'Vista Exterior - Parking de bicicletas', en: 'Exterior View - Bicycle Parking' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083641/mixed-projects-3_kydvlc.png', desc: { es: 'Vista Interior - Sala de Estar de Doble Altura', en: 'Interior View - Double-Height Living Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083641/mixed-projects-4_leukzw.png', desc: { es: 'Vista Interior - Comedor y Pasillo', en: 'Interior View - Dining Room and Hallway' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083641/mixed-projects-5_mjndvs.png', desc: { es: 'Vista Exterior - Fachada Residencial Moderna', en: 'Exterior View - Modern Residential Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083641/mixed-projects-6_ipw8hu.png', desc: { es: 'Vista Exterior - Edificio de Apartamentos Propuesto (Barrio Escalante)', en: 'Exterior View - Proposed Apartment Building (Barrio Escalante)' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083642/mixed-projects-7_kdx2b9.png', desc: { es: 'Vista Exterior - Área Pública Propuesta para Parque (Puriscal)', en: 'Exterior View - Proposed Public Area for Park (Puriscal)' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083639/mixed-projects-8_idvkap.png', desc: { es: 'Vista Exterior - Área Pública Propuesta para Parque (Puriscal)', en: 'Exterior View - Proposed Public Area for Park (Puriscal)' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083639/mixed-projects-9_ihbi0k.png', desc: { es: 'Vista Interior - Sala de Estar y Escaleras', en: 'Interior View - Living Room and Stairs' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083639/mixed-projects-10_whvyt1.png', desc: { es: 'Vista Interior - Habitación Principal con Ventanal', en: 'Interior View - Master Bedroom with Large Window' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083639/mixed-projects-11_vuu92e.png', desc: { es: 'Vista Interior - Diseño de Mueble de TV', en: 'Interior View - TV cabinet design' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083637/mixed-projects-12_w84t35.png', desc: { es: 'Vista Exterior - Hotel Vacacional', en: 'Exterior View - Vacation Hotel' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083635/mixed-projects-13_ypbqkq.png', desc: { es: 'Vista Exterior - Hotel Vacacional', en: 'Exterior View - Vacation Hotel' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083637/mixed-projects-14_v9unzd.png', desc: { es: 'Vista Exterior - Fachada exterior Steve', en: "Exterior View - Steve's Exterior Facade" } }
  ] },
  { id: 9, category: 'comercial', title: 'Los Jobos', year: '2025', area: '850 m²', location: 'Tamarindo', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083652/laurent-portada_ilpqr0.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775085444/laurent-1_orqye9.png', desc: { es: 'Vista Interior - Dormitorio Principal', en: 'Interior View - Master Bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083658/laurent-2_vgjhm6.png', desc: { es: 'Vista Interior - Cocina Abierta Moderna', en: 'Interior View - Modern Open Kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083652/laurent-3_d96pfy.png', desc: { es: 'Vista Interior - Dormitorio con Vista', en: 'Interior View - Bedroom with View' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083652/laurent-4_h1nt62.png', desc: { es: 'Vista Interior - Habitación de Huéspedes', en: 'Interior View - Guest Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083652/laurent-5_u0f1pw.png', desc: { es: 'Vista Interior - Diseño de Cocina', en: 'Interior View - Kitchen Design' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083651/laurent-6_jjfrze.png', desc: { es: 'Vista Interior - Sala y Comedor Integrado', en: 'Interior View - Integrated Living and Dining Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083648/laurent-7_cys6sf.png', desc: { es: 'Vista Interior - Diseño de Habitación', en: 'Interior View - Room Design' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083647/laurent-8_ws1jwd.png', desc: { es: 'Vista Interior - Opciones de Materiales Cocina', en: 'Interior View - Kitchen Material Options' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083653/laurent-10_jbpjfh.png', desc: { es: 'Vista Interior - Detalle de Cocina', en: 'Interior View - Kitchen Detail' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083644/laurent-9_wsqq1q.png', desc: { es: 'Vista Exterior - Exterior Condominio Nocturno', en: 'Exterior View - Nighttime Condominium Exterior' } }
  ] },
  { id: 10, category: 'residential', title: 'Fritz & Sabine', year: '2023', area: '293 m²', location: 'Matapalo, Guanacaste', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083598/fritz-sabine-portada_nreuxz.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083604/fritz-sabine-1_lq6oju.png', desc: { es: 'Vista Exterior - Terraza', en: 'Exterior View - Terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083599/fritz-sabine-2_rkking.png', desc: { es: 'Vista Interior - Cocina', en: 'Interior View - Kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083597/fritz-sabine-3_psxrne.png', desc: { es: 'Vista Interior - Dormitorio', en: 'Interior View - Bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083598/fritz-sabine-4_thjh6j.png', desc: { es: 'Vista Interior - Sala', en: 'Interior View - Living Room' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083602/fritz-sabine-5_vntlyg.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083603/fritz-sabine-6_m1dwyq.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } }
  ] },
  { id: 11, category: 'residential', title: 'Greer', year: '2023', area: '310 m²', location: 'Playa Grande', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083586/greer-portada_yivw5k.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083595/greer-1_drnfvc.png', desc: { es: 'Vista Interior - Baño', en: 'Interior View - Bathroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083592/greer-2_aqqan1.png', desc: { es: 'Vista Interior - Cocina', en: 'Interior View - Kitchen' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083592/greer-3_yoywat.png', desc: { es: 'Vista Exterior - Comedor y Terraza', en: 'Exterior View - Dining Room and Terrace' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083591/greer-4_x0hvpk.png', desc: { es: 'Vista Exterior - Ducha exterior', en: 'Exterior View - Outdoor Shower' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083592/greer-5_b1ysaw.png', desc: { es: 'Vista Interior - Dormitorio', en: 'Interior View - Bedroom' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083587/greer-6_qakbjb.png', desc: { es: 'Vista Exterior - Piscina', en: 'Exterior View - Pool' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083586/greer-7_m53uqq.png', desc: { es: 'Vista Interior - Baño', en: 'Interior View - Bathroom' } }
  ] },
  { id: 12, category: 'residential', title: 'Alexis', year: '2024', area: '500 m²', location: 'Miami', img: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083618/alexis-portada_cj2n53.png', gallery: [
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083620/alexis-1_uvxfgy.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083621/alexis-2_qkbdgi.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083620/alexis-3_yudf0h.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083618/alexis-4_ncikv8.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } },
    { src: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083619/alexis-5_t7xzw1.png', desc: { es: 'Vista Exterior - Fachada externa', en: 'Exterior View - External Facade' } }
  ] }
];

        const ICONS = [ <PenTool size={32} />, <Ruler size={32} />, <Monitor size={32} />, <Armchair size={32} />, <FileText size={32} /> ];

        const TESTIMONIALS = [
          {
            id: 1,
            company: 'Venero Arquitectura + Consultoría',
            logo: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775165685/3_axrzac.png',
            text: {
              es: 'Trabajar con JMM Render Studio fue una experiencia sumamente fluida y profesional. Destaco especialmente la calidad visual de los renders, la atención al detalle y la capacidad de comprender con claridad la intención conceptual del proyecto. En su colaboración con Venero Arquitectura, incluso bajo plazos muy reducidos, se consolidaron como un aliado estratégico clave, entregando cada pieza con excelencia, compromiso y una actitud siempre proactiva y colaborativa, elevando significativamente el resultado final.',
              en: 'Working with JMM Render Studio was an extremely smooth and professional experience. I especially highlight the visual quality of the renders, the attention to detail, and the ability to clearly understand the conceptual intention of the project. In their collaboration with Venero Arquitectura, even under very tight deadlines, they established themselves as a key strategic ally, delivering each piece with excellence, commitment, and an always proactive and collaborative attitude, significantly elevating the final result.'
            }
          },
          {
            id: 2,
            company: 'David Abergel',
            logo: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775259163/betterlife_dydcsl.png',
            text: {
              es: 'JMM Render Studio destaca por su alto nivel profesional, precisión en cada detalle y consistencia en resultados de alta calidad. Son un aliado clave en nuestros proyectos en Monteverde, Puntarenas.',
              en: 'JMM Render Studio stands out for its high professional standard, precision in every detail, and consistency in delivering high-quality results. They are a key partner in our projects in Monteverde, Puntarenas.'
            }
          }
        ];

        const JOURNAL_ARTICLES = [
          {
            id: 1,
            date: { es: '3 Abril 2026', en: 'April 3, 2026' },
            title: { es: 'Guía de Inversión: De la Visión a la Realidad Constructiva', en: 'Investment Guide: From Vision to Constructive Reality' },
            author: 'Arq. Jafett Rivera',
            authorImg: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775169813/image_r4txtu.png',
            coverImg: 'https://res.cloudinary.com/drqimcuhb/image/upload/q_auto/f_auto/v1775083637/plano-plantas_qqrqqc.jpg',
            content: {
              es: `
                <div class="jmm-guide">
                  <div class="jmm-section">
                    <div class="jmm-section-label">
                      <div class="jmm-step-num">I</div>
                      <h2>La base técnica - pre-diseño y permisos</h2>
                    </div>
                    <p class="jmm-phase-intro">Antes de diseñar, debemos entender el ADN de su terreno. Estos documentos son indispensables para asegurar la viabilidad legal y estructural de su obra.</p>

                    <div class="jmm-checklist">
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Certificado de uso de suelo</strong><span>Dicta qué se puede construir, respetando retiros y porcentaje de cobertura según el plan regulador. Se solicita en la Municipalidad. Es el primer paso antes de cualquier trámite.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Plano catastrado</strong><span>La identidad legal de su propiedad; esencial para cualquier trámite ante el CFIA o la Municipalidad.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Disponibilidad de agua (carta de la ASADA / AyA)</strong><span>Certifica que existe capacidad hídrica para su futura conexión domiciliaria.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Conexión de red eléctrica</strong><span>Verificación de disponibilidad y condiciones de acometida con la empresa distribuidora correspondiente.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Estudio de topografía (curvas de nivel)</strong><span>Fundamental para entender el relieve del terreno. Un buen diseño se adapta a la topografía, optimizando movimientos de tierra y costos de cimentación.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Estudio de suelos</strong><span>Garantiza que el diseño estructural de las cimentaciones sea el correcto para la capacidad portante real del terreno. No se improvisa lo que no se conoce.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Prueba de infiltración</strong><span>Necesaria para el diseño responsable del sistema de manejo de aguas residuales y drenajes pluviales.</span></div></div>
                    </div>

                    <div class="jmm-note-box">
                      <strong>Inversión en gestión:</strong> Debido a que cada entidad y terreno presenta retos distintos, los costos de tramitación y estudios técnicos se cotizan de forma personalizada según la complejidad del proyecto.
                    </div>

                    <div style="margin-top: 2.5rem;">
                      <p style="font-size: 11px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; font-family: var(--font-body);">Requisitos de permisos municipales</p>

                      <div class="jmm-tabs-wrapper">
                        <div class="jmm-tabs-nav">
                          <button class="jmm-tab-btn active" onclick="jmmTab(this,'menor')">Obra menor</button>
                          <button class="jmm-tab-btn" onclick="jmmTab(this,'mayor')">Obra mayor</button>
                          <button class="jmm-tab-btn" onclick="jmmTab(this,'general')">Reglas generales</button>
                        </div>

                        <div class="jmm-tab-panel active" id="jmm-panel-menor">
                          <span class="jmm-tab-badge blue">Hasta 40 m²</span>
                          <div class="jmm-grid2">
                            <div class="jmm-mini-card"><div class="label">Área máxima</div><div class="value">40 m²</div></div>
                            <div class="jmm-mini-card"><div class="label">Profesional CFIA</div><div class="value">No siempre requerido</div></div>
                          </div>
                          <ul class="jmm-req-list">
                            <li class="jmm-req-item"><div class="jmm-req-num">1</div><div class="jmm-req-text"><strong>Formulario de solicitud</strong><span>Lleno y firmado por el propietario. Se obtiene en la Municipalidad.</span></div></li>
                            <li class="jmm-req-item"><div class="jmm-req-num">2</div><div class="jmm-req-text"><strong>Certificado de uso de suelo</strong><span>Si la obra es industria, también se requiere calificación del Ministerio de Salud.</span></div></li>
                            <li class="jmm-req-item"><div class="jmm-req-num">3</div><div class="jmm-req-text"><strong>Croquis a escala del proyecto</strong><span>Un dibujo técnico simple mostrando la obra que se va a realizar.</span></div></li>
                          </ul>
                          <div class="jmm-tab-alert amber">
                            <strong>Nota sobre segunda planta:</strong> Si la obra incluye una segunda planta - aunque sea menor a 40 m² - se requieren planos firmados por un profesional responsable.
                          </div>
                        </div>

                        <div class="jmm-tab-panel" id="jmm-panel-mayor">
                          <span class="jmm-tab-badge amber">Más de 40 m²</span>
                          <div class="jmm-grid2">
                            <div class="jmm-mini-card"><div class="label">Área mínima</div><div class="value">+40 m²</div></div>
                            <div class="jmm-mini-card"><div class="label">Profesional CFIA</div><div class="value">Sí, siempre requerido</div></div>
                          </div>
                          <ul class="jmm-req-list">
                            <li class="jmm-req-item"><div class="jmm-req-num">1</div><div class="jmm-req-text"><strong>Formulario de solicitud completo</strong><span>Firmado por el propietario. Se obtiene en la Municipalidad correspondiente.</span></div></li>
                            <li class="jmm-req-item"><div class="jmm-req-num">2</div><div class="jmm-req-text"><strong>Certificado de uso de suelo</strong><span>Requisito previo indispensable.</span></div></li>
                            <li class="jmm-req-item"><div class="jmm-req-num">3</div><div class="jmm-req-text"><strong>Planos constructivos visados</strong><span>Visados por el CFIA y el Área Rectora de Salud. Obligatoriamente elaborados por un profesional inscrito.</span></div></li>
                          </ul>
                        </div>

                        <div class="jmm-tab-panel" id="jmm-panel-general">
                          <span class="jmm-tab-badge blue">Aplica a toda obra</span>
                          <ul class="jmm-req-list">
                            <li class="jmm-req-item"><div class="jmm-req-num check">✓</div><div class="jmm-req-text"><strong>Toda obra necesita permiso municipal</strong><span>Sin importar el tamaño ni el costo. No existe proyecto exento.</span></div></li>
                            <li class="jmm-req-item"><div class="jmm-req-num check">✓</div><div class="jmm-req-text"><strong>Modificaciones estructurales</strong><span>Requieren ingeniero o arquitecto inscrito sin importar el tamaño.</span></div></li>
                          </ul>
                          <div class="jmm-tab-alert green">
                            <strong>Primer paso recomendado:</strong> Antes de cualquier proyecto, tramitá el certificado de uso de suelo en la Municipalidad.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="jmm-section">
                    <div class="jmm-section-label">
                      <div class="jmm-step-num">II</div>
                      <h2>Diseño y Visualización 3D</h2>
                    </div>
                    <p class="jmm-phase-intro">Transformamos planos técnicos en experiencias visuales hiperrealistas. Nuestra prioridad es el detalle constructivo, no la entrega masiva.</p>

                    <div class="overflow-x-auto">
                      <table class="jmm-pricing-table min-w-[600px]">
                        <thead>
                          <tr>
                            <th style="width: 35%;">Servicio</th>
                            <th style="width: 25%;">Inversión estimada</th>
                            <th>Lo que incluye</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><span class="service-name">Juego de Planos</span></td>
                            <td><span class="service-price">Desde $2000</span></td>
                            <td><span class="service-desc">Incluye planos arquitectónicos, mecánicos y estructurales.</span></td>
                          </tr>
                          <tr>
                            <td><span class="service-name">Planos Eléctricos</span></td>
                            <td><span class="service-price">Desde $65 por juego</span></td>
                            <td><span class="service-desc">Cotizados por separado según los requerimientos del proyecto.</span></td>
                          </tr>
                          <tr>
                            <td><span class="service-name">Modelado 3D base</span></td>
                            <td><span class="service-price">Desde $600</span></td>
                            <td><span class="service-desc">Creación del volumen digital completo del proyecto.</span></td>
                          </tr>
                          <tr>
                            <td><span class="service-name">Paquete de renders (6+ fotogramas)</span></td>
                            <td><span class="service-price">$600 - $800+</span></td>
                            <td><span class="service-desc">Imágenes de alta gama con texturas reales e iluminación naturalista.</span></td>
                          </tr>
                          <tr>
                            <td><span class="service-name">Recorridos virtuales (video)</span></td>
                            <td><span class="service-price">Desde $500</span></td>
                            <td><span class="service-desc">Producción cinematográfica según duración y complejidad.</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="jmm-section">
                    <div class="jmm-section-label">
                      <div class="jmm-step-num">III</div>
                      <h2>¿Por qué elegir un proceso completo con nosotros?</h2>
                    </div>
                    
                    <div class="jmm-pillars">
                      <div class="jmm-pillar">
                        <div class="jmm-pillar-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg></div>
                        <h4>Excelencia en acabados</h4>
                        <p>No escatimamos en nivel de detalle. Cada material en el render es una especificación técnica que puede ejecutarse en obra.</p>
                      </div>
                      <div class="jmm-pillar">
                        <div class="jmm-pillar-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"></path></svg></div>
                        <h4>Filtro de calidad</h4>
                        <p>Preferimos dedicar tiempo a la perfección técnica que a la producción rápida de baja fidelidad. Cada proyecto es único.</p>
                      </div>
                    </div>
                  </div>

                  <div class="jmm-footer-note">
                    <div class="note-line"></div>
                    <p><strong>Nota informativa para el cliente -</strong> Los rangos de precios mostrados son puntos de partida. El presupuesto final dependerá del metraje cuadrado, la complejidad del diseño, el número de revisiones solicitadas y si se requiere el juego de planos completo para construcción. Cada proyecto se cotiza de forma personalizada.</p>
                  </div>
                </div>
              `,
              en: `
                <div class="jmm-guide">
                  <div class="jmm-section">
                    <div class="jmm-section-label">
                      <div class="jmm-step-num">I</div>
                      <h2>The Technical Base - Pre-Design and Permits</h2>
                    </div>
                    <p class="jmm-phase-intro">Before designing, we must understand your land's DNA. These documents are essential to ensure the legal and structural viability of your project.</p>

                    <div class="jmm-checklist">
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Land Use Certificate (Uso de Suelo)</strong><span>Dictates what can be built, respecting setbacks and coverage percentages.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Cadastral Plan</strong><span>The legal identity of your property; essential for any process.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Water Availability</strong><span>Certifies that there is water capacity for your future connection.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Topographic Survey</strong><span>Fundamental to understand the terrain's relief and optimize foundations.</span></div></div>
                      <div class="jmm-check-item"><div class="jmm-check-dot"></div><div class="jmm-check-body"><strong>Soil Study</strong><span>Guarantees that the structural design of the foundations is correct.</span></div></div>
                    </div>

                    <div class="jmm-note-box">
                      <strong>Management Investment:</strong> Processing costs and technical studies are quoted personally according to the complexity of the project.
                    </div>
                  </div>

                  <div class="jmm-section">
                    <div class="jmm-section-label">
                      <div class="jmm-step-num">II</div>
                      <h2>3D Design and Visualization</h2>
                    </div>
                    
                    <div class="overflow-x-auto">
                      <table class="jmm-pricing-table min-w-[600px]">
                        <thead>
                          <tr><th style="width: 35%;">Service</th><th style="width: 25%;">Estimated Investment</th><th>What it includes</th></tr>
                        </thead>
                        <tbody>
                          <tr><td><span class="service-name">Complete Plan Set</span></td><td><span class="service-price">From $2000</span></td><td><span class="service-desc">Includes architectural, mechanical, and structural plans.</span></td></tr>
                          <tr><td><span class="service-name">Electrical Plans</span></td><td><span class="service-price">From $65 per set</span></td><td><span class="service-desc">Quoted separately based on project requirements.</span></td></tr>
                          <tr><td><span class="service-name">Base 3D Modeling</span></td><td><span class="service-price">From $600</span></td><td><span class="service-desc">Creation of the complete digital volume of the project.</span></td></tr>
                          <tr><td><span class="service-name">Render Package (6+ frames)</span></td><td><span class="service-price">$600 - $800+</span></td><td><span class="service-desc">High-end images with real textures and lighting.</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="jmm-footer-note">
                    <div class="note-line"></div>
                    <p><strong>Informative Note -</strong> The price ranges shown are starting points. The final budget will depend on the square footage, design complexity, and requirements. Once each case is defined, a financial offer and delivery deadlines are provided. For client convenience, installment payments can be arranged.</p>
                  </div>
                </div>
              `
            }
          }
        ];

        const TRANSLATIONS = {
            en: {
                nav: { home: 'Home', portfolio: 'Portfolio', services: 'Services', journal: 'Journal', about: 'About', contact: 'Contact' },
                hero: { sub: 'From Render to Reality', title: 'Bring your vision <br/> to life with JMM', desc: 'Technical precision and realistic visual representation for projects demanding the highest quality.', btn: 'Explore Projects' },
                testimonials: { title: 'Client Testimonials', subtitle: 'Strategic Allies' },
                journal: { title: 'Journal', desc: 'Insights, technical guides, and news from the architectural visualization world.', label: 'Article' },
                services: { 
                    title: 'Our Services', 
                    items: [
                        { title: 'Design and Drafting of Plans', desc: 'We transform ideas into precise technical specifications.' },
                        { title: 'On-Site Architectural Survey', desc: 'Exact measurements and digitization of your project\'s current state.' },
                        { title: '3D Rendering & Visual Solutions', desc: 'Photorealistic renders with high-quality lighting and textures.' },
                        { title: 'Custom Furniture Design', desc: 'Custom pieces that perfectly adapt to your spaces.' },
                        { title: 'Consulting & Permit Management', desc: 'Consulting and quality control complying with current regulations.' }
                    ],
                    details: [
                        { text: 'Los Jobos Apartment Building:', lbl1: '1st & 2nd Floor Plans', lbl2: 'Structural Isometrics' },
                        { text: 'Roble Sabana Condominium, Escazú:', lbl1: 'Real State', lbl2: 'As-Built Plan' },
                        { text: 'Interactive 3D View: Living, dining, and kitchen at Casa Ingrid.', action: '' },
                        { text: 'Casa Valeria Kitchen, Alegría de Alajuela:', lbl1: '3D Render', lbl2: 'Real Result' },
                        { text: 'Comprehensive permit management with CFIA and local municipalities. We rigorously follow national regulations, processing approvals from Fire Departments, Ministry of Health, SENASA, and other corresponding entities to ensure your project starts without legal setbacks.' }
                    ],
                    srvTitle: 'Services', srvDesc: 'Tap each service to explore technical details and visual examples.', srvB1: 'High precision and technical detail.', srvB2: 'Deliveries in industry-standard formats.' 
                },
                portfolio: { title: 'Portfolio', desc: 'The precision of our modeling reflected in every detail, material, and lighting.', featTitle: 'Featured Projects', featBtn: 'View Full Gallery', filters: { all: 'All', residential: 'Residential', comercial: 'Commercial' }, lblGallery: 'Gallery', viewMore: 'View Project' },
                about: { 
                    title: 'About Us', sub: 'Commitment to efficient and sustainable development.', p1: '<strong>JMM</strong> stands for Arq. Jafett Rivera, Arq. Melissa Rivera, and Eng. Melissa Santana, the founders of the company. At <strong>JMM Render Studio</strong>, we are more than image creators; we are technical translators. We convert complex specifications into visual experiences that communicate value and build trust.', p2: 'Our mission is to empower architects, developers, and designers through cutting-edge visual tools, ensuring every project is perfectly understood before the first stone is laid.', processTitle: 'The JMM Process', processDesc: 'Tap each step to learn more.',
                    steps: [
                        { title: 'Plans', desc: 'Plan analysis and technical requirement gathering.' },
                        { title: '3D Modeling', desc: 'Volumetric construction with exact proportions.' },
                        { title: 'Materials & Light', desc: 'Realistic texture application and lighting study.' },
                        { title: 'Reality', desc: 'High-resolution final rendering and post-production.' }
                    ],
                    locationTitle: 'Headquarters', locationDesc: 'Heredia - Costa Rica'
                },
                contact: { 
                    title: 'Contact Us', desc: 'Ready to visualize your next project? Write to us and let\'s get started.', infoTitle: 'Direct Information', quote: '"We specialize in converting technical abstraction into a comprehensible and spectacular visual reality."', formTitle: 'Request a Quote', name: 'Full Name', namePh: 'Your name or company', email: 'Email Address', emailPh: 'your@email.com', 
                    phone: 'Phone (Optional)', phonePh: 'Phone number',
                    type: 'Project Type', typeOpt: ['Select an option', 'Residential Render', 'Commercial Render', 'Plan Design', 'Furniture Design', 'Architectural Surveys', 'Permits & Consulting', 'Technical Visits', 'Other Service'], msg: 'Message / Details', msgPh: 'Tell us briefly about the scale, timeline, and requirements of your project.', submit: 'Send Message', 
                    successMsg: 'Sent successfully! Thank you, we will contact you very soon.', errorMsg: 'There was an error. Please try again or contact us directly.',
                    lblPhone: 'WhatsApp', valPhone: 'Start Chat', lblEmail: 'Email', lblTelegram: 'Telegram', lblIg: 'Instagram' 
                },
                footer: { desc: 'From Render to Reality. Specialists in architectural visual representation and comprehensive project development.', links: 'Quick Links', contact: 'Contact', rights: 'All rights reserved.', design: 'Designed with love <span class="animate-heartbeat text-teal-400">&lt;3</span>' }
            },
            es: {
                nav: { home: 'Inicio', portfolio: 'Portafolio', services: 'Servicios', journal: 'Blog', about: 'Nosotros', contact: 'Contacto' },
                hero: { sub: 'Del render a la realidad', title: 'Trae a la vida <br/> tu visión con JMM', desc: 'Precisión técnica y representación visual realista para proyectos que exigen la máxima calidad.', btn: 'Explorar Proyectos' },
                testimonials: { title: 'Lo que dicen de nosotros', subtitle: 'Aliados Estratégicos' },
                journal: { title: 'Blog', desc: 'Conocimiento, guías técnicas y novedades del mundo de la visualización arquitectónica.', label: 'Artículo' },
                services: { 
                    title: 'Nuestros Servicios', 
                    items: [
                        { title: 'Diseño y elaboración de planos', desc: 'Transformamos ideas en especificaciones técnicas precisas.' },
                        { title: 'Levantamiento arquitectónico en sitio', desc: 'Mediciones exactas y digitalización del estado actual de tu proyecto.' },
                        { title: 'Renderizado 3D y Soluciones', desc: 'Renders fotorrealistas con iluminación y texturas de alta calidad.' },
                        { title: 'Diseño y fabricación de mobiliario', desc: 'Piezas personalizadas que se adaptan perfectamente a tus espacios.' },
                        { title: 'Consultoría y gestión de permisos', desc: 'Asesoría y control de calidad cumpliendo con las normativas vigentes.' }
                    ],
                    details: [
                        { text: 'Edificio de Apartamentos Los Jobos:', lbl1: 'Plantas 1er y 2do Piso', lbl2: 'Isométrico Estructural' },
                        { text: 'Condominio Roble Sabana, Escazú:', lbl1: 'Estado Real (Sitio)', lbl2: 'Plano As-Built' },
                        { text: 'Visor 3D Interactivo: Sala, comedor y cocina de Casa Ingrid.', action: '' },
                        { text: 'Cocina Casa Valeria, Alegría de Alajuela:', lbl1: 'Render JMM', lbl2: 'Mueble Construido' },
                        { text: 'Gestión integral de permisos ante el CFIA y municipalidades. Damos seguimiento riguroso a las normativas nacionales vigentes, tramitando aprobaciones de Bomberos, Ministerio de Salud, SENASA y demás entidades para garantizar que tu obra inicie sin contratiempos legales.' }
                    ],
                    srvTitle: 'Servicios', srvDesc: 'Toca cada servicio para explorar detalles técnicos y ejemplos visuales.', srvB1: 'Alta precisión y detalle técnico.', srvB2: 'Entregas en formatos estándar de la industria.' 
                },
                portfolio: { title: 'Portafolio', desc: 'La precisión de nuestros modelados reflejada en cada detalle, material e iluminación.', featTitle: 'Proyectos Destacados', featBtn: 'Ver Galería Completa', filters: { all: 'Todos', residential: 'Residencial', comercial: 'Comercial' }, lblGallery: 'Galería', viewMore: 'Ver más' },
                about: { 
                    title: 'Sobre Nosotros', sub: 'Compromiso con el desarrollo eficiente y sostenible.', p1: '<strong>JMM</strong> son las siglas de Arq. Jafett Rivera, Arq. Melissa Rivera e Ing. Melissa Santana, los fundadores de la empresa. En <strong>JMM Render Studio</strong>, somos más que creadores de imágenes; somos traductores técnicos. Convertimos especificaciones complejas en experiencias visuales que comunican valor y generan confianza.', p2: 'Nuestra misión es empoderar a arquitectos, desarrolladores y diseñadores mediante herramientas visuales de vanguardia, asegurando que cada proyecto se entienda a la perfección antes de colocar la primera piedra.', processTitle: 'El Proceso JMM', processDesc: 'Toca cada paso para conocer nuestra metodología.',
                    steps: [
                        { title: 'Planos', desc: 'Análisis de planos y levantamiento de requisitos técnicos.' },
                        { title: 'Modelado 3D', desc: 'Construcción volumétrica con proporciones exactas.' },
                        { title: 'Materiales & Luz', desc: 'Aplicación de texturas realistas y estudio de iluminación.' },
                        { title: 'Realidad', desc: 'Renderizado final en alta resolución y postproducción.' }
                    ],
                    locationTitle: 'Sede Principal', locationDesc: 'Heredia - Costa Rica'
                },
                contact: { 
                    title: 'Contáctanos', desc: '¿Listo para visualizar tu próximo proyecto? Escríbenos y comencemos a trabajar.', infoTitle: 'Información Directa', quote: '"Nos especializamos en convertir la abstracción técnica en una realidad visual comprensible y espectacular."', formTitle: 'Solicita una Cotización', name: 'Nombre Completo', namePh: 'Tu nombre o empresa', email: 'Correo Electrónico', emailPh: 'tucorreo@ejemplo.com', 
                    phone: 'Teléfono (Opcional)', phonePh: 'Tu número',
                    type: 'Tipo de Proyecto', typeOpt: ['Selecciona una opción', 'Render Residencial', 'Render Comercial', 'Diseño de Planos', 'Diseño de Mobiliario', 'Levantamientos Arquitectónicos', 'Permisos y Consultoría', 'Visitas Técnicas', 'Otro Servicio'], msg: 'Mensaje / Detalles', msgPh: 'Cuéntanos brevemente sobre la escala, tiempos y requerimientos del proyecto.', submit: 'Enviar Mensaje', 
                    successMsg: '¡Enviado con éxito! Gracias, muy pronto nos estaremos comunicando contigo.', errorMsg: 'Hubo un error al enviar. Por favor, inténtalo de nuevo o escríbenos directamente.',
                    lblPhone: 'WhatsApp', valPhone: 'Iniciar Chat', lblEmail: 'Correo Electrónico', lblTelegram: 'Telegram', lblIg: 'Instagram' 
                },
                footer: { desc: 'From Render to Reality. Especialistas en representación visual arquitectónica y desarrollo de proyectos integrales.', links: 'Enlaces Rápidos', contact: 'Contacto', rights: 'Todos los derechos reservados.', design: 'Diseñado con amor <span class="animate-heartbeat text-teal-400">&lt;3</span>' }
            }
        };

export {
  PORTFOLIO_ITEMS,
  ICONS,
  TESTIMONIALS,
  JOURNAL_ARTICLES,
  TRANSLATIONS,
};


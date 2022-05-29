CREATE VIEW MaternalRiskTrain AS SELECT BS, BodyTemp, DiastolicBP, HeartRate, RiskLevel, SystolicBP, age FROM dc_data_health.MaternalHealthRisk 
GO 
CREATE MODEL MaternalRiskModel PREDICTING (RiskLevel) FROM MaternalRiskTrain 
GO 
TRAIN MODEL MaternalRiskModel 
GO 

CREATE VIEW KidneyDiseaseTrain AS SELECT 
age, al, ane, appet, ba, bgr, bp, bu, cad, classification, dm, hemo, htn, pc, pcc, pcv, pe, pot, rbc, rc, sc, sg, sod, su, wc
FROM dc_data_health.KidneyDisease
GO
CREATE MODEL KidneyDiseaseModel PREDICTING (classification) FROM KidneyDiseaseTrain  
GO
TRAIN MODEL KidneyDiseaseModel
GO
CREATE VIEW DiabetesTrain AS SELECT Outcome, age, bloodpressure, bmi, diabetespedigree, glucose, insulin, pregnancies, skinthickness FROM dc_data_health.Diabetes
GO
CREATE MODEL DiabetesModel PREDICTING (Outcome) FROM DiabetesTrain
GO
TRAIN MODEL DiabetesModel
GO

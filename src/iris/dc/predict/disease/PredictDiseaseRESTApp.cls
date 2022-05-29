Class dc.predict.disease.PredictDiseaseRESTApp Extends %CSP.REST
{

Parameter CHARSET = "utf-8";

Parameter CONVERTINPUTSTREAM = 1;

Parameter CONTENTTYPE = "application/json";

Parameter Version = "1.0.0";

Parameter HandleCorsRequest = 1;

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
<!-- Server Info -->
<Route Url="/" Method="GET" Call="GetInfo" Cors="true"/>

<!-- predict maternal risk -->
<Route Url="/predict-maternal-risk" Method="POST" Call="PredictMaternalRisk" />

<!-- predict kidney disease -->
<Route Url="/predict-kidney-disease" Method="POST" Call="PredictKidneyDisease" />

<!-- predict diabetes -->
<Route Url="/predict-diabetes" Method="POST" Call="PredictDiabetes" />

</Routes>
}

/// Predict Maternal Risk
ClassMethod PredictMaternalRisk() As %Status
{
    Try {
      Set data = {}.%FromJSON(%request.Content)
      Set %response.Status = 200
      Set %response.Headers("Access-Control-Allow-Origin")="*"
      
      Set qry = "SELECT PREDICT(MaternalRiskModel) As PredictedMaternalRisk, "
                  _"age, BS, BodyTemp, DiastolicBP, HeartRate, SystolicBP " 
                  _"FROM (SELECT "_data.BS_" AS BS, "
                  _data.BodyTemp_" As BodyTemp, " 
                  _data.DiastolicBP_" AS DiastolicBP, "
                  _data.HeartRate_" AS HeartRate, "
                  _data.SystolicBP_" As SystolicBP, "
                  _data.Age_" AS age)"
      Set tStatement = ##class(%SQL.Statement).%New()
      Set qStatus = tStatement.%Prepare(qry)
      If qStatus'=1 {WRITE "%Prepare failed:" DO $System.Status.DisplayError(qStatus) QUIT}
      Set rset = tStatement.%Execute()
      Do rset.%Next()

      Set Response = {}
      Set Response.PredictedMaternalRisk = rset.PredictedMaternalRisk
      Set Response.Age = rset.Age
      Set Response.SystolicBP = rset.SystolicBP
      Set Response.DiastolicBP = rset.DiastolicBP
      Set Response.BS = rset.BS
      Set Response.BodyTemp = rset.BodyTemp
      Set Response.HeartRate = rset.HeartRate

      Write Response.%ToJSON()
      Return 1
      
    } Catch err {
      write !, "Error name: ", ?20, err.Name,
          !, "Error code: ", ?20, err.Code,
          !, "Error location: ", ?20, err.Location,
          !, "Additional data: ", ?20, err.Data, !
      Return 0
    }
}

/// Predict Kidney Disease
ClassMethod PredictKidneyDisease() As %Status
{
    Try {
      Set data = {}.%FromJSON(%request.Content)
      Set %response.Status = 200
      Set %response.Headers("Access-Control-Allow-Origin")="*"
      
      Set qry = "SELECT PREDICT(KidneyDiseaseModel) As PredictedKidneyDisease, "
                  _"age, al, ane, appet, ba, bgr, bp, bu, cad, dm, "
                  _"hemo, htn, pc, pcc, pcv, pe, pot, rbc, rc, sc, sg, sod, su, wc " 
                  _"FROM (SELECT "_data.age_" AS age, "
                  _data.al_" As al, " 
                  _"'"_data.ane_"'"_" AS ane, "
                  _"'"_data.appet_"'"_" AS appet, "
                  _"'"_data.ba_"'"_" As ba, "
                  _data.bgr_" As bgr, " 
                  _data.bp_" AS bp, "
                  _data.bu_" AS bu, "
                  _"'"_data.cad_"'"_" As cad, "
                  _"'"_data.dm_"'"_" As dm, " 
                  _data.hemo_" AS hemo, "
                  _"'"_data.htn_"'"_" AS htn, "
                  _"'"_data.pc_"'"_" As pc, "
                  _"'"_data.pcc_"'"_" As pcc, " 
                  _data.pcv_" AS pcv, "
                  _"'"_data.pe_"'"_" AS pe, "
                  _data.pot_" As pot, "
                  _"'"_data.rbc_"'"_" As rbc, " 
                  _data.rc_" AS rc, "
                  _data.sc_" AS sc, "
                  _data.sg_" As sg, "
                  _data.sod_" As sod, " 
                  _data.su_" AS su, "
                  _data.wc_" AS wc)"
      Set tStatement = ##class(%SQL.Statement).%New()
      Set qStatus = tStatement.%Prepare(qry)
      If qStatus'=1 {WRITE "%Prepare failed:" DO $System.Status.DisplayError(qStatus) QUIT}
      Set rset = tStatement.%Execute()
      Do rset.%Next()

      Set Response = {}
      Set Response.PredictedKidneyDisease = rset.PredictedKidneyDisease
      Set Response.age = rset.age 
      Set Response.al = rset.al 
      Set Response.ane = rset.ane
      Set Response.appet = rset.appet
      Set Response.ba = rset.ba
      Set Response.bgr = rset.bgr 
      Set Response.bp = rset.bp
      Set Response.bu = rset.bu
      Set Response.cad = rset.cad
      Set Response.dm = rset.dm 
      Set Response.hemo = rset.hemo
      Set Response.htn = rset.htn
      Set Response.pc = rset.pc
      Set Response.pcc = rset.pcc 
      Set Response.pcv = rset.pcv
      Set Response.pe = rset.pe
      Set Response.pot = rset.pot
      Set Response.rbc = rset.rbc 
      Set Response.rc = rset.rc
      Set Response.sc = rset.sc
      Set Response.sg = rset.sg
      Set Response.sod = rset.sod 
      Set Response.su = rset.su
      Set Response.wc = rset.wc

      Write Response.%ToJSON()
      
      Return 1
      
    } Catch err {
      write !, "Error name: ", ?20, err.Name,
          !, "Error code: ", ?20, err.Code,
          !, "Error location: ", ?20, err.Location,
          !, "Additional data: ", ?20, err.Data, !
      Return 0
    }
}

/// Predict Diabetes
ClassMethod PredictDiabetes() As %Status
{
    Try {
      Set data = {}.%FromJSON(%request.Content)
      
      Set qry = "SELECT PREDICT(DiabetesModel) As PredictedDiabetes, "
                  _"age, bloodpressure, bmi, diabetespedigree, glucose, insulin, "
                  _"pregnancies, skinthickness " 
                  _"FROM (SELECT "_data.age_" AS age, "
                  _data.bloodpressure_" As bloodpressure, " 
                  _data.bmi_" AS bmi, "
                  _data.diabetespedigree_" AS diabetespedigree, "
                  _data.glucose_" As glucose, "
                  _data.insulin_" AS insulin, "
                  _data.pregnancies_" As pregnancies, "
                  _data.skinthickness_" AS skinthickness)"
      Set tStatement = ##class(%SQL.Statement).%New()
      Set qStatus = tStatement.%Prepare(qry)
      If qStatus'=1 {WRITE "%Prepare failed:" DO $System.Status.DisplayError(qStatus) QUIT}
      Set rset = tStatement.%Execute()
      Do rset.%Next()

      Set Response = {}
      Set Response.PredictedDiabetes = rset.PredictedDiabetes
      Set Response.age = rset.age
      Set Response.bloodpressure = rset.bloodpressure
      Set Response.bmi = rset.bmi
      Set Response.diabetespedigree = rset.diabetespedigree
      Set Response.glucose = rset.glucose
      Set Response.insulin = rset.insulin
      Set Response.pregnancies = rset.pregnancies
      Set Response.skinthickness = rset.skinthickness

      Set %response.Status = 200
      Set %response.Headers("Access-Control-Allow-Origin")="*"
      
      Write Response.%ToJSON()
      
      Return 1
      
    } Catch err {
      write !, "Error name: ", ?20, err.Name,
          !, "Error code: ", ?20, err.Code,
          !, "Error location: ", ?20, err.Location,
          !, "Additional data: ", ?20, err.Data, !
      Return 0
    }
}

/// General information
ClassMethod GetInfo() As %Status
{
  SET version = ..#Version
  SET fmt=##class(%SYS.NLS.Format).%New("ptbw")
  
  SET info = {
    "Service": "Health Diseases Predictor API",
    "version": (version),
    "Developer": "Yuri Gomes",
    "Status": "Ok",
    "Date": ($ZDATETIME($HOROLOG))
  }
  Set %response.ContentType = "application/json"
  Set %response.Headers("Access-Control-Allow-Origin")="*"
  

  Write info.%ToJSON()
  Quit $$$OK
}

}

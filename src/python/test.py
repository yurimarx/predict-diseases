import pyodbc 
import time

input("Hit any key to start")

dsn = 'IRIS Samples'
server = '127.0.0.1' 
database = 'USER' 
username = '_SYSTEM' 
password = 'SYS' 
port = '51773'
cnxn = pyodbc.connect('DRIVER={/usr/irissys/bin/libirisodbc35.so};SERVER='+server+'; PORT='+port+'; DATABASE='+database+';UID='+username+';PWD='+ password)
#cnxn = pyodbc.connect('DSN='+dsn+';')
lowptr=cnxn.getinfo(127)
highptr=cnxn.getinfo(136)
#value = PyLong_FromUnsignedLongLong(lowptr)
#print("%#5.8x"% (value))

print ("Connection high pointer: ")
print (format(highptr, '02x'))
print ("Connection high pointer: ")
print("%#5.8x"% (highptr))
print ("Connection low pointer: ")
print("%#5.8x"% (lowptr))
cursor = cnxn.cursor()
start= time.clock()


#Sample select query
cursor.execute("SELECT BS, BodyTemp, DiastolicBP, HeartRate, RiskLevel, SystolicBP, age FROM dc_data_health.MaternalHealthRisk") 
row = cursor.fetchone() 
while row: 
    print(row) 
    row = cursor.fetchone()

end= time.clock()
print ("Total elapsed time: ")
print (end-start)
input("Hit any key to end")
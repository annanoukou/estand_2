import mysql.connector


class DataBase:

  def ConnectToDB(self):
    self.mydb = mysql.connector.connect(
      host="localhost",
      user="TED",
      passwd="ff134002",
      database="estand"
    )
    return self.mydb

  def CloseConnection(self):
    self.mydb.close()
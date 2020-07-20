<?php
    class Currency{
        private $conn;
        private $table_name = "currency_master";
        public $id; //int ai
        public $currency_name; //varchar 150
        public $currency_iso3; //varchar 3
        public $charge; //double 5,2
        public $pos; //int 2
        public $udt; //datetime

        public function __construct($db){
            $this->conn = $db;
        }
        
        function getValues(){
            $query = "SELECT * FROM ".$this->table_name." ORDER BY pos ASC";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        function setCharge(){
            $query = "
                UPDATE " . $this->table_name . " SET charge=:charge, udt=:dt WHERE id=:id
            ";
            $stmt = $this->conn->prepare($query);
            
            $this->id=htmlspecialchars(strip_tags($this->id));
            $this->charge=htmlspecialchars(strip_tags($this->charge));
            $this->udt=date('Y-m-d H:i:s');
            
            $stmt->bindParam(":id", $this->id);
            $stmt->bindParam(":charge", $this->charge);
            $stmt->bindParam(":dt", $this->udt);
            
            if($stmt->execute()){
                return true;
            }
            return false;
        }
    }
?>
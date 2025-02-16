#!/bin/bash

# Параметри MySQL
MYSQL_USER="root"
MYSQL_PASSWORD="root"
MYSQL_DATABASE="mydb"
BACKUP_DIR="./backups"
BACKUP_FILE="$BACKUP_DIR/backup_$(date +%F_%H-%M-%S).sql"

# Створення резервної копії
docker exec mysql-container sh -c "mysqldump -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DATABASE" > "$BACKUP_FILE"

echo "Резервна копія створена: $BACKUP_FILE"

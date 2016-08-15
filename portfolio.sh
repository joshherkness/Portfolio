#!/bin/bash

# Configuration
PORT="4567"
URL="http://localhost:$PORT"

function getMiddlemanPID() {
  echo $(ps ax | grep middleman | grep --invert-match grep | awk {'print $1'})
}

# Function that returns "1" if it can find the middleman process, and "0" otherwise
function isMiddlemanRunning() {
  PROCESS_ID=$(getMiddlemanPID)
  if [ "$PROCESS_ID" == "" ]; then
    echo "0"
  else
    echo "1"
  fi
}

function openBrowserWithURL() {
  # Prompt
  echo "In which browser would you like to view $1?"
  select BROWSER in "Google Chrome" "Safari" "Firefox"
  do
    case $BROWSER in
      "Google Chrome")
        open -ga "Google Chrome" $1 &
        break;;
      "Safari")
        open -ga Safari $1 &
        break;;
      "Firefox")
        open -ga "FirefoxDeveloperEdition" $1 &
        break;;
      *)
        echo "Can't do that"
        break;;
    esac
  done
}

# Function that closes the middleman server
function closeMiddleman () {
  if [ $(isMiddlemanRunning) == "1" ]
  then
    echo "Closing Middleman Server..."
    echo $(getMiddlemanPID) | xargs kill -9
    echo "Middleman has been closed."
  else
    echo "Middleman is not open"
  fi
}

function openMiddleman () {
  if [ $(isMiddlemanRunning) == "1" ]
  then
    echo "Middleman is already running, would you like to close it first?"
    select CONTINUE in Yes No
    do
      case $CONTINUE in
        "Yes")
          closeMiddleman
          break;;
        *)
          openBrowserWithURL $URL
          exit
          break;;
      esac
    done
  fi

  bundle exec middleman --port=$PORT &
  sleep 4s

  openBrowserWithURL $URL
}

# Prompt the user
echo "What would you like to do with Middleman?"
OPEN_SERVER="Open Server 👍"
CLOSE_SERVER="Close Server 💔"
select OPTION in "$OPEN_SERVER" "$CLOSE_SERVER" "Cancel"
do
  case $OPTION in
    "$OPEN_SERVER")
      openMiddleman
      break;;
    "$CLOSE_SERVER")
      closeMiddleman
      break;;
    *)
      echo "Goodbye! 😢"
      exit
      break;;
  esac
done

function convert() {
	var inputValue = document.getElementById("inputValue").value;
	var fromUnit = document.getElementById("fromUnit").value;
	var toUnit = document.getElementById("toUnit").value;

	if (fromUnit == "m") {
		if (toUnit == "m") {
			document.getElementById("outputValue").innerHTML = inputValue;
		}
		else if (toUnit == "km") {
			document.getElementById("outputValue").innerHTML = inputValue / 1000;
		}
		else if (toUnit == "cm") {
			document.getElementById("outputValue").innerHTML = inputValue * 100;
		}
		else if (toUnit == "mm") {
			document.getElementById("outputValue").innerHTML = inputValue * 1000;
		}
		else if (toUnit == "mi") {
			document.getElementById("outputValue").innerHTML = inputValue / 1609.344;
		}
		else if (toUnit == "yd") {
			document.getElementById("outputValue").innerHTML = inputValue * 1.09361;
		}
		else if (toUnit == "ft") {
			document.getElementById("outputValue").innerHTML = inputValue * 3.28084;
		}
		else if (toUnit == "in") {
			document.getElementById("outputValue").innerHTML = inputValue * 39.3701;
		}
	}
	else if (fromUnit == "km") {
		if (toUnit == "km") {
			document.getElementById("outputValue").innerHTML = inputValue;
		}
		else if (toUnit == "m") {
			document.getElementById("outputValue").innerHTML = inputValue * 1000;
		}
		else if (toUnit == "cm") {
			document.getElementById("outputValue").innerHTML = inputValue * 100000;
		}
		else if (toUnit == "mm") {
			document.getElementById("outputValue").innerHTML = inputValue * 1000000;
		}
		else if (toUnit == "mi") {
			document.getElementById("outputValue").innerHTML = inputValue / 1.609344;
		}
		else if (toUnit == "yd") {
			document.getElementById("outputValue").innerHTML = inputValue * 1093.613;
		}
		else if (toUnit == "ft") {
			document.getElementById("outputValue").innerHTML = inputValue * 3280.84;
		}
		else if (toUnit == "in") {
			document.getElementById("outputValue").innerHTML = inputValue * 39370.1;
		}
	}
	else if (fromUnit == "cm") {
		if (toUnit == "cm") {
			document.getElementById("outputValue").innerHTML = inputValue;
		}
		else if (toUnit == "m") {
			document.getElementById("outputValue").innerHTML = inputValue / 100;
		}
		else if (toUnit == "km") {
			document.getElementById("outputValue").innerHTML = inputValue / 100000;
		}
		else if (toUnit == "mm") {
			document.getElementById("outputValue").innerHTML = inputValue * 10;
		}
		else if (toUnit == "mi") {
			document.getElementById("outputValue").innerHTML = inputValue / 160934.4;
		}
		else if (toUnit == "yd") {
			document.getElementById("outputValue").innerHTML = inputValue / 91.44;
		}
		else if (toUnit == "ft") {
			document.getElementById("outputValue").innerHTML = inputValue / 30.48;
		}else if (toUnit == "in") {
            document.getElementById("outputValue").innerHTML = inputValue / 2.54;
            }
    }
    else if (fromUnit == "mm") {
         if (toUnit == "mm") {
         document.getElementById("outputValue").innerHTML = inputValue;
         }
         else if (toUnit == "m") {
         document.getElementById("outputValue").innerHTML = inputValue / 1000;
         }
         else if (toUnit == "cm") {
         document.getElementById("outputValue").innerHTML = inputValue / 10;
         }
         else if (toUnit == "km") {
         document.getElementById("outputValue").innerHTML = inputValue / 1000000;
         }
         else if (toUnit == "mi") {
         document.getElementById("outputValue").innerHTML = inputValue / 1609344;
         }
         else if (toUnit == "yd") {
         document.getElementById("outputValue").innerHTML = inputValue / 914.4;
        }
        else if (toUnit == "ft") {
        document.getElementById("outputValue").innerHTML = inputValue / 304.8;
        }
        else if (toUnit == "in") {
        document.getElementById("outputValue").innerHTML = inputValue / 25.4;
        }
    }
    else if (fromUnit == "mi") {
        if (toUnit == "mi") {
        document.getElementById("outputValue").innerHTML = inputValue;
        }
        else if (toUnit == "m") {
        document.getElementById("outputValue").innerHTML = inputValue * 1609.344;
        }
        else if (toUnit == "cm") {
        document.getElementById("outputValue").innerHTML = inputValue * 160934.4;
        }
        else if (toUnit == "mm") {
        document.getElementById("outputValue").innerHTML = inputValue * 1609344;
        }
        else if (toUnit == "km") {
        document.getElementById("outputValue").innerHTML = inputValue * 1.609344;
        }
        else if (toUnit == "yd") {
        document.getElementById("outputValue").innerHTML = inputValue * 1760;
        }
        else if (toUnit == "ft") {
        document.getElementById("outputValue").innerHTML = inputValue * 5280;
        }
        else if (toUnit == "in") {
        document.getElementById("outputValue").innerHTML = inputValue * 63360;
        }
    }
    else if (fromUnit == "yd") {
        if (toUnit == "yd") {
        document.getElementById("outputValue").innerHTML = inputValue;
        }
        else if (toUnit == "m") {
        document.getElementById("outputValue").innerHTML = inputValue * 0.9144;
        }
        else if (toUnit == "cm") {
        document.getElementById("outputValue").innerHTML = inputValue * 91.44;
        }
        else if (toUnit == "mm") {
        document.getElementById("outputValue").innerHTML = inputValue * 914.4;
        }
        else if (toUnit == "km") {
        document.getElementById("outputValue").innerHTML = inputValue * 0.0009144;
        }
        else if (toUnit == "mi") {
        document.getElementById("outputValue").innerHTML = inputValue / 1760;
        }
        else if (toUnit == "ft") {
        document.getElementById("outputValue").innerHTML = inputValue * 3;
        }
        else if (toUnit == "in") {
        document.getElementById("outputValue").innerHTML = inputValue * 36;
        }
    }
    else if (fromUnit == "ft") {
        if (toUnit == "ft") {
        document.getElementById("outputValue").innerHTML = inputValue;
        }
        else if (toUnit == "m") {
        document.getElementById("outputValue").innerHTML = inputValue * 3.28084;
        }
        else if (toUnit == "cm") {
        document.getElementById("outputValue").innerHTML = inputValue * 0.0328084;
        }
        else if (toUnit == "mm") {
        document.getElementById("outputValue").innerHTML = inputValue /305;
        }
        else if (toUnit == "km") {
        document.getElementById("outputValue").innerHTML = inputValue * 3280.8;
        }
        else if (toUnit == "mi") {
        document.getElementById("outputValue").innerHTML = inputValue *5280;
        }
        else if (toUnit == "yd") {
        document.getElementById("outputValue").innerHTML = inputValue *3;
        }
        else if (toUnit == "in") {
        document.getElementById("outputValue").innerHTML = inputValue /12;
        }
} 
else if (fromUnit == "in") {
    if (toUnit == "in") {
    document.getElementById("outputValue").innerHTML = inputValue;
    }
    else if (toUnit == "m") {
    document.getElementById("outputValue").innerHTML = inputValue * 39.370079;
    }
    else if (toUnit == "cm") {
    document.getElementById("outputValue").innerHTML = inputValue * 0.393701;
    }
    else if (toUnit == "mm") {
    document.getElementById("outputValue").innerHTML = inputValue *0.0393701;
    }
    else if (toUnit == "km") {
    document.getElementById("outputValue").innerHTML = inputValue * 39370.1;
    }
    else if (toUnit == "mi") {
    document.getElementById("outputValue").innerHTML = inputValue *63360;
    }
    else if (toUnit == "yd") {
    document.getElementById("outputValue").innerHTML = inputValue *36;
    }
    else if (toUnit == "ft") {
    document.getElementById("outputValue").innerHTML = inputValue *12;
    }
} 
}
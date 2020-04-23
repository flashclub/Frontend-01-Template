function (string) {
        var buffer = new Uint8Array(1000);
        var i = 0;
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                buffer[i] = c;
                i++;
            }
            else if ((c > 127) && (c < 2048)) {
                buffer[i] = (c >> 6) | 192;
                buffer[i+1] = (c & 63) | 128;
                i += 2;
            }
            else if ((c > 2047) && (c < 65536)) {
                buffer[i] = (c >> 12) | 224;
                buffer[i+1] = ((c >> 6) & 63) | 128;
                buffer[i+2] = (c & 63) | 128;
                i += 3;
            }
            else {
                buffer[i] = (c >> 18) | 240;
                buffer[i+1] = ((c >> 12) & 63) | 128;
                buffer[i+2] = ((c >> 6) & 63) | 128;
                buffer[i+3] = (c & 63) | 128;
                i += 4;
            }
        }
        
        return buffer;
    }
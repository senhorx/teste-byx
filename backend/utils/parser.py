from datetime import datetime, timedelta


def parser_txt_to_dict(file):
    read_file = file.read()
    file_string = read_file.decode("utf-8")
    lines = file_string.split("\n")
    return_dicts = []
    for line in lines:
        if len(line) < 67:
            continue
        try:
            date = convert_date(line[1:20], line[20:26])

            return_dicts.append(
                {
                    "product_type": line[0],
                    "date": date,
                    "product": str(line[26:56]).strip(),
                    "value": int(str(line[56:66]).strip()),
                    "seller": str(line[66:86]).strip(),
                }
            )
        except Exception as e:
            print(e)
            return e
    return return_dicts


def convert_date(date, gmt):
    try:
        date = datetime.strptime(date, "%Y-%m-%dT%H:%M:%S")

        if gmt[0] == "-":
            return date - timedelta(hours=int(gmt[1:3]), minutes=int(gmt[4:6]))
        if gmt[0] == "+":
            return date - timedelta(hours=int(gmt[1:3]), minutes=int(gmt[4:6]))
    except Exception as e:
        print(e)
        return None

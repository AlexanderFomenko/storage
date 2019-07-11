from exec import Executor
from json import dumps, loads

def net():
	int_name = Executor.exec("ls /sys/class/net").split('\n')
	result_dict = {}
	for interface in int_name:
		result_dict.__setitem__(interface, [info for info in loads(Executor.exec("ip -j link list dev {}".format(interface)))[0].values()])
	print(result_dict)

net()
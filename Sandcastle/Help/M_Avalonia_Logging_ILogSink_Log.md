---
title:Log(LogEventLevel, String, Object, String, Object[]) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Log(LogEventLevel, String, Object, String, Object[]) Method




## Definition
**Namespace:** <a href="N_Avalonia_Logging">Avalonia.Logging</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
void Log(
	LogEventLevel level,
	string area,
	Object? source,
	string messageTemplate,
	params Object?[] propertyValues
)
```
**VB**
``` VB
Sub Log ( 
	level As LogEventLevel,
	area As String,
	source As Object,
	messageTemplate As String,
	ParamArray propertyValues As Object()
)
```
**F#**
``` F#
abstract Log : 
        level : LogEventLevel * 
        area : string * 
        source : Object * 
        messageTemplate : string * 
        propertyValues : Object[] -> unit 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>[]</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Logging_ILogSink">ILogSink Interface</a>  
<a href="Overload_Avalonia_Logging_ILogSink_Log">Log Overload</a>  
<a href="N_Avalonia_Logging">Avalonia.Logging Namespace</a>  

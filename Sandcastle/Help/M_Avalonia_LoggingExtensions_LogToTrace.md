---
title:LogToTrace Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# LogToTrace Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public static AppBuilder LogToTrace(
	this AppBuilder builder,
	LogEventLevel level = LogEventLevel.Warning,
	params string[] areas
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function LogToTrace ( 
	builder As AppBuilder,
	Optional level As LogEventLevel = LogEventLevel.Warning,
	ParamArray areas As String()
) As AppBuilder
```
**F#**
``` F#
[<ExtensionAttribute>]
static member LogToTrace : 
        builder : AppBuilder * 
        ?level : LogEventLevel * 
        areas : string[] 
(* Defaults:
        let _level = defaultArg level LogEventLevel.Warning
*)
-> AppBuilder 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AppBuilder">AppBuilder</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Logging_LogEventLevel">LogEventLevel</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_AppBuilder">AppBuilder</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AppBuilder">AppBuilder</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_LoggingExtensions">LoggingExtensions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

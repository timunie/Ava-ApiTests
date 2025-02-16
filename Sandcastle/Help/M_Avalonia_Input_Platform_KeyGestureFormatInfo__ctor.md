---
title:KeyGestureFormatInfo Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# KeyGestureFormatInfo Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public KeyGestureFormatInfo(
	IReadOnlyDictionary<Key, string>? platformKeyOverrides = null,
	string meta = "Cmd",
	string ctrl = "Ctrl",
	string alt = "Alt",
	string shift = "Shift"
)
```
**VB**
``` VB
Public Sub New ( 
	Optional platformKeyOverrides As IReadOnlyDictionary(Of Key, String) = Nothing,
	Optional meta As String = "Cmd",
	Optional ctrl As String = "Ctrl",
	Optional alt As String = "Alt",
	Optional shift As String = "Shift"
)
```
**F#**
``` F#
new : 
        ?platformKeyOverrides : IReadOnlyDictionary<Key, string> * 
        ?meta : string * 
        ?ctrl : string * 
        ?alt : string * 
        ?shift : string 
(* Defaults:
        let _platformKeyOverrides = defaultArg platformKeyOverrides null
        let _meta = defaultArg meta "Cmd"
        let _ctrl = defaultArg ctrl "Ctrl"
        let _alt = defaultArg alt "Alt"
        let _shift = defaultArg shift "Shift"
*)
-> KeyGestureFormatInfo
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(<a href="T_Avalonia_Input_Key">Key</a>, <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo Class</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  

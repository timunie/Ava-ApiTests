---
title:RaiseAndSetIfChanged&lt;T&gt; Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# RaiseAndSetIfChanged&lt;T&gt; Method




## Definition
**Namespace:** <a href="N_Avalonia_Dialogs_Internal">Avalonia.Dialogs.Internal</a>  
**Assembly:** Avalonia.Dialogs (in Avalonia.Dialogs.dll) Version: 11.2.4

**C#**
``` C#
protected bool RaiseAndSetIfChanged<T>(
	ref T field,
	T value,
	string? propertyName = null
)

```
**VB**
``` VB
Protected Function RaiseAndSetIfChanged(Of T) ( 
	ByRef field As T,
	value As T,
	Optional propertyName As String = Nothing
) As Boolean
```
**F#**
``` F#
member RaiseAndSetIfChanged : 
        field : 'T byref * 
        value : 'T * 
        ?propertyName : string 
(* Defaults:
        let _propertyName = defaultArg propertyName null
*)
-> bool 
```



#### Parameters
<dl><dt>  T</dt><dd> </dd><dt>  T</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_Dialogs_Internal_AvaloniaDialogsInternalViewModelBase">AvaloniaDialogsInternalViewModelBase Class</a>  
<a href="N_Avalonia_Dialogs_Internal">Avalonia.Dialogs.Internal Namespace</a>  

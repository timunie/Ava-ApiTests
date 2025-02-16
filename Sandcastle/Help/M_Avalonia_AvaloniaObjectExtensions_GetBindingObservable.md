---
title:GetBindingObservable(AvaloniaObject, AvaloniaProperty) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetBindingObservable(AvaloniaObject, AvaloniaProperty) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<BindingValue<Object>> GetBindingObservable(
	this AvaloniaObject o,
	AvaloniaProperty property
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetBindingObservable ( 
	o As AvaloniaObject,
	property As AvaloniaProperty
) As IObservable(Of BindingValue(Of Object))
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetBindingObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty -> IObservable<BindingValue<Object>> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>))

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

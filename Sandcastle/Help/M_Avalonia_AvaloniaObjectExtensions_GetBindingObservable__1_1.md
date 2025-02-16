---
title:GetBindingObservable&lt;T&gt;(AvaloniaObject, AvaloniaProperty&lt;T&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetBindingObservable&lt;T&gt;(AvaloniaObject, AvaloniaProperty&lt;T&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<BindingValue<T>> GetBindingObservable<T>(
	this AvaloniaObject o,
	AvaloniaProperty<T> property
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetBindingObservable(Of T) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty(Of T)
) As IObservable(Of BindingValue(Of T))
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetBindingObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty<'T> -> IObservable<BindingValue<'T>> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(T)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(T))

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

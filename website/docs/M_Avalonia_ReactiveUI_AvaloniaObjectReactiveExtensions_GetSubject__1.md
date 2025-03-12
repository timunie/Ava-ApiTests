# GetSubject&lt;T&gt;(AvaloniaObject, AvaloniaProperty&lt;T&gt;, BindingPriority) Method


Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI</a>  
**Assembly:** Avalonia.ReactiveUI (in Avalonia.ReactiveUI.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static ISubject<T> GetSubject<T>(
	this AvaloniaObject o,
	AvaloniaProperty<T> property,
	BindingPriority priority = BindingPriority.LocalValue
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetSubject(Of T) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty(Of T),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As ISubject(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetSubject : 
        o : AvaloniaObject * 
        property : AvaloniaProperty<'T> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> ISubject<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.ReactiveUI/AvaloniaObjectReactiveExtensions.cs#L49" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(T)</dt><dd>The property.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority with which binding values are written to the object.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The property type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.reactive.subjects.isubject-1" target="_blank" rel="noopener noreferrer">ISubject</a>(T)  
An <a href="https://learn.microsoft.com/dotnet/api/system.reactive.subjects.isubject-1" target="_blank" rel="noopener noreferrer">ISubject</a> which can be used for two-way binding to/from the property.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions Class</a>  
<a href="Overload_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject">GetSubject Overload</a>  
<a href="N_Avalonia_ReactiveUI">Avalonia.ReactiveUI Namespace</a>  


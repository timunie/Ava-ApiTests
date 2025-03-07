# GetObservable&lt;T&gt;(AvaloniaObject, AvaloniaProperty&lt;T&gt;) Method


Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<T> GetObservable<T>(
	this AvaloniaObject o,
	AvaloniaProperty<T> property
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetObservable(Of T) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty(Of T)
) As IObservable(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty<'T> -> IObservable<'T> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObjectExtensions.cs#L57" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(T)</dt><dd>The property.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The property type.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(T)  
An observable which fires immediately with the current value of the property on the object and subsequently each time the property value changes.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.The subscription to *o* is created using a weak reference.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

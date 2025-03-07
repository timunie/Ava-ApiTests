# GetObservable&lt;TSource, TResult&gt;(AvaloniaObject, AvaloniaProperty&lt;TSource&gt;, Func&lt;TSource, TResult&gt;) Method


Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IObservable<TResult> GetObservable<TSource, TResult>(
	this AvaloniaObject o,
	AvaloniaProperty<TSource> property,
	Func<TSource, TResult> converter
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function GetObservable(Of TSource, TResult) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty(Of TSource),
	converter As Func(Of TSource, TResult)
) As IObservable(Of TResult)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member GetObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty<'TSource> * 
        converter : Func<'TSource, 'TResult> -> IObservable<'TResult> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObjectExtensions.cs#L70" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd /><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TSource)</dt><dd /><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TSource, TResult)</dt><dd>A method which is executed to convert each property value to <em>TResult</em>.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the values held by the <em>property</em>.</dd><dt /><dd>The type of the value returned by the <em>converter</em>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(TResult)  
An observable which fires immediately with the current value of the property on the object and subsequently each time the property value changes.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.The subscription to *o* is created using a weak reference.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

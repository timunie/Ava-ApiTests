# Bind&lt;T&gt;(DirectPropertyBase&lt;T&gt;, IObservable&lt;T&gt;) Method


Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable Bind<T>(
	DirectPropertyBase<T> property,
	IObservable<T> source
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Bind(Of T) ( 
	property As DirectPropertyBase(Of T),
	source As IObservable(Of T)
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Bind : 
        property : DirectPropertyBase<'T> * 
        source : IObservable<'T> -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L599" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyBase_1">DirectPropertyBase</a>(T)</dt><dd>The property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(T)</dt><dd>The observable.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable which can be used to terminate the binding.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_Bind">Bind Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

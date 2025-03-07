# Bind&lt;T&gt;(StyledProperty&lt;T&gt;, IObservable&lt;BindingValue&lt;T&gt;&gt;, BindingPriority) Method


Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable Bind<T>(
	StyledProperty<T> property,
	IObservable<BindingValue<T>> source,
	BindingPriority priority = BindingPriority.LocalValue
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Bind(Of T) ( 
	property As StyledProperty(Of T),
	source As IObservable(Of BindingValue(Of T)),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Bind : 
        property : StyledProperty<'T> * 
        source : IObservable<BindingValue<'T>> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L533" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd>The property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(T))</dt><dd>The observable.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority of the binding.</dd></dl>

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

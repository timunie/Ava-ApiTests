# SetValue&lt;T&gt;(StyledProperty&lt;T&gt;, T, BindingPriority) Method


Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable? SetValue<T>(
	StyledProperty<T> property,
	T value,
	BindingPriority priority = BindingPriority.LocalValue
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function SetValue(Of T) ( 
	property As StyledProperty(Of T),
	value As T,
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetValue : 
        property : StyledProperty<'T> * 
        value : 'T * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L332" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_StyledProperty_1">StyledProperty</a>(T)</dt><dd>The property.</dd><dt>  T</dt><dd>The value.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority of the value.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
An <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> if setting the property can be undone, otherwise null.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetValue">SetValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

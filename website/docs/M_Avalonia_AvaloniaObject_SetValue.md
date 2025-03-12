# SetValue(AvaloniaProperty, Object, BindingPriority) Method


Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IDisposable? SetValue(
	AvaloniaProperty property,
	Object? value,
	BindingPriority priority = BindingPriority.LocalValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function SetValue ( 
	property As AvaloniaProperty,
	value As Object,
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SetValue : 
        property : AvaloniaProperty * 
        value : Object * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L313" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority of the value.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="Overload_Avalonia_AvaloniaObject_SetValue">SetValue Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


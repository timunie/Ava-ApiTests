# TwoWay Method


Creates a new two-way binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static InstancedBinding TwoWay(
	IObservable<Object?> observable,
	IObserver<Object?> observer,
	BindingPriority priority = BindingPriority.LocalValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function TwoWay ( 
	observable As IObservable(Of Object),
	observer As IObserver(Of Object),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As InstancedBinding
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member TwoWay : 
        observable : IObservable<Object> * 
        observer : IObserver<Object> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> InstancedBinding 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/InstancedBinding.cs#L154" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The binding source.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The binding source.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority of the binding.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a>  
An <a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

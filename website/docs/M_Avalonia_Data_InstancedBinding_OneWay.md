# OneWay Method


Creates a new one-way binding.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static InstancedBinding OneWay(
	IObservable<Object?> observable,
	BindingPriority priority = BindingPriority.LocalValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function OneWay ( 
	observable As IObservable(Of Object),
	Optional priority As BindingPriority = BindingPriority.LocalValue
) As InstancedBinding
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member OneWay : 
        observable : IObservable<Object> * 
        ?priority : BindingPriority 
(* Defaults:
        let _priority = defaultArg priority BindingPriority.LocalValue
*)
-> InstancedBinding 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/InstancedBinding.cs#L123" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The source observable.</dd><dt>  <a href="T_Avalonia_Data_BindingPriority">BindingPriority</a>  (Optional)</dt><dd>The priority of the binding.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a>  
An <a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_Data_InstancedBinding">InstancedBinding Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  


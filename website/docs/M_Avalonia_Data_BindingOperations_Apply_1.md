# Apply(AvaloniaObject, AvaloniaProperty, InstancedBinding) Method
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Applies an <a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a> a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")]
public static IDisposable Apply(
	AvaloniaObject target,
	AvaloniaProperty property,
	InstancedBinding binding
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>
Public Shared Function Apply ( 
	target As AvaloniaObject,
	property As AvaloniaProperty,
	binding As InstancedBinding
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("This API may be removed in Avalonia 12. If you depend on this API, please open an issue with details of your use-case.")>]
static member Apply : 
        target : AvaloniaObject * 
        property : AvaloniaProperty * 
        binding : InstancedBinding -> IDisposable 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingOperations.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd>The target object.</dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd>The property to bind.</dd><dt>  <a href="T_Avalonia_Data_InstancedBinding">InstancedBinding</a></dt><dd>The instanced binding.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
An <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a> which can be used to cancel the binding.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingOperations">BindingOperations Class</a>  
<a href="Overload_Avalonia_Data_BindingOperations_Apply">Apply Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  


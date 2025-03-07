# AvaloniaPropertyMetadata Constructor


Initializes a new instance of the <a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata</a> class.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AvaloniaPropertyMetadata(
	BindingMode defaultBindingMode = BindingMode.Default,
	bool? enableDataValidation = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	Optional defaultBindingMode As BindingMode = BindingMode.Default,
	Optional enableDataValidation As Boolean? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : Nullable<bool> 
(* Defaults:
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.Default
        let _enableDataValidation = defaultArg enableDataValidation null
*)
-> AvaloniaPropertyMetadata
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaPropertyMetadata.cs#L18" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd>The default binding mode.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  (Optional)</dt><dd>Whether the property is interested in data validation.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaPropertyMetadata">AvaloniaPropertyMetadata Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

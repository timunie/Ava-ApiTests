# DirectPropertyMetadata&lt;TValue&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_StyledPropertyMetadata_1">StyledPropertyMetadata(TValue)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public DirectPropertyMetadata(
	TValue unsetValue = null,
	BindingMode defaultBindingMode = BindingMode.Default,
	bool? enableDataValidation = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	Optional unsetValue As TValue = Nothing,
	Optional defaultBindingMode As BindingMode = BindingMode.Default,
	Optional enableDataValidation As Boolean? = Nothing
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        ?unsetValue : 'TValue * 
        ?defaultBindingMode : BindingMode * 
        ?enableDataValidation : Nullable<bool> 
(* Defaults:
        let _unsetValue = defaultArg unsetValue null
        let _defaultBindingMode = defaultArg defaultBindingMode BindingMode.Default
        let _enableDataValidation = defaultArg enableDataValidation null
*)
-> DirectPropertyMetadata
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/DirectPropertyMetadata%601.cs#L24" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_DirectPropertyMetadata_1">TValue</a>  (Optional)</dt><dd>The value to use when the property is set to <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a></dd><dt>  <a href="T_Avalonia_Data_BindingMode">BindingMode</a>  (Optional)</dt><dd>The default binding mode.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)  (Optional)</dt><dd>Whether the property is interested in data validation.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_DirectPropertyMetadata_1">DirectPropertyMetadata(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  


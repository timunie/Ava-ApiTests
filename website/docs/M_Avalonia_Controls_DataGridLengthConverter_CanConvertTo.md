# CanConvertTo(ITypeDescriptorContext, Type) Method


Checks whether or not this class can convert to a given type.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override bool CanConvertTo(
	ITypeDescriptorContext context,
	Type destinationType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function CanConvertTo ( 
	context As ITypeDescriptorContext,
	destinationType As Type
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CanConvertTo : 
        context : ITypeDescriptorContext * 
        destinationType : Type -> bool 
override CanConvertTo : 
        context : ITypeDescriptorContext * 
        destinationType : Type -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L401" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.itypedescriptorcontext" target="_blank" rel="noopener noreferrer">ITypeDescriptorContext</a></dt><dd>An ITypeDescriptorContext that provides a format context.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The Type being queried for support.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if this converter can convert to the provided type, `false` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLengthConverter">DataGridLengthConverter Class</a>  
<a href="Overload_Avalonia_Controls_DataGridLengthConverter_CanConvertTo">CanConvertTo Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

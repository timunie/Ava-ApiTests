# CanConvertFrom(ITypeDescriptorContext, Type) Method


Checks whether or not this class can convert from a given type.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override bool CanConvertFrom(
	ITypeDescriptorContext context,
	Type sourceType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function CanConvertFrom ( 
	context As ITypeDescriptorContext,
	sourceType As Type
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CanConvertFrom : 
        context : ITypeDescriptorContext * 
        sourceType : Type -> bool 
override CanConvertFrom : 
        context : ITypeDescriptorContext * 
        sourceType : Type -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L370" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.itypedescriptorcontext" target="_blank" rel="noopener noreferrer">ITypeDescriptorContext</a></dt><dd>An ITypeDescriptorContext that provides a format context.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The Type being queried for support.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`true` if this converter can convert from the provided type, `false` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLengthConverter">DataGridLengthConverter Class</a>  
<a href="Overload_Avalonia_Controls_DataGridLengthConverter_CanConvertFrom">CanConvertFrom Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


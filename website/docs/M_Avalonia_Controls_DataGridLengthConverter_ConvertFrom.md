# ConvertFrom(ITypeDescriptorContext, CultureInfo, Object) Method


Attempts to convert to a DataGridLength from the given object.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override Object ConvertFrom(
	ITypeDescriptorContext context,
	CultureInfo culture,
	Object value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function ConvertFrom ( 
	context As ITypeDescriptorContext,
	culture As CultureInfo,
	value As Object
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ConvertFrom : 
        context : ITypeDescriptorContext * 
        culture : CultureInfo * 
        value : Object -> Object 
override ConvertFrom : 
        context : ITypeDescriptorContext * 
        culture : CultureInfo * 
        value : Object -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L422" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.itypedescriptorcontext" target="_blank" rel="noopener noreferrer">ITypeDescriptorContext</a></dt><dd>An ITypeDescriptorContext that provides a format context.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The CultureInfo to use for the conversion.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to convert to a GridLength.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The GridLength instance which was constructed.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>A NotSupportedException is thrown if the example object is null.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLengthConverter">DataGridLengthConverter Class</a>  
<a href="Overload_Avalonia_Controls_DataGridLengthConverter_ConvertFrom">ConvertFrom Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

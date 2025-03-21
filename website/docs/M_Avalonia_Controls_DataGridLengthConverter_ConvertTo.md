# ConvertTo(ITypeDescriptorContext, CultureInfo, Object, Type) Method


Attempts to convert a DataGridLength instance to the given type.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public override Object ConvertTo(
	ITypeDescriptorContext context,
	CultureInfo culture,
	Object value,
	Type destinationType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overrides Function ConvertTo ( 
	context As ITypeDescriptorContext,
	culture As CultureInfo,
	value As Object,
	destinationType As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ConvertTo : 
        context : ITypeDescriptorContext * 
        culture : CultureInfo * 
        value : Object * 
        destinationType : Type -> Object 
override ConvertTo : 
        context : ITypeDescriptorContext * 
        culture : CultureInfo * 
        value : Object * 
        destinationType : Type -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridLength.cs#L499" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.itypedescriptorcontext" target="_blank" rel="noopener noreferrer">ITypeDescriptorContext</a></dt><dd>An ITypeDescriptorContext that provides a format context.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The CultureInfo to use for the conversion.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The DataGridLength to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type to which to convert the DataGridLength instance.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The object which was constructed.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception" target="_blank" rel="noopener noreferrer">ArgumentNullException</a></td>
<td>An ArgumentNullException is thrown if the example object is null.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception" target="_blank" rel="noopener noreferrer">NotSupportedException</a></td>
<td>A NotSupportedException is thrown if the object is not null and is not a DataGridLength, or if the destinationType isn't one of the valid destination types.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGridLengthConverter">DataGridLengthConverter Class</a>  
<a href="Overload_Avalonia_Controls_DataGridLengthConverter_ConvertTo">ConvertTo Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


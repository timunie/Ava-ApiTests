# ColumnProperty Field


Column property. This is an attached property. Grid defines Column property, so that it can be set on any element treated as a cell. Column property specifies child's position with respect to columns.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly AttachedProperty<int> ColumnProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ColumnProperty As AttachedProperty(Of Integer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ColumnProperty: AttachedProperty<int>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Grid.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_AttachedProperty_1">AttachedProperty</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)
Columns are 0 - based. In order to appear in first column, element should have Column property set to `0`.

Default value for the property is `0`.


## See Also


#### Reference
<a href="T_Avalonia_Controls_Grid">Grid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

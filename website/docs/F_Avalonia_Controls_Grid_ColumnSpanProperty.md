# ColumnSpanProperty Field


ColumnSpan property. This is an attached property. Grid defines ColumnSpan, so that it can be set on any element treated as a cell. ColumnSpan property specifies child's width with respect to columns. Example, ColumnSpan == 2 means that child will span across two columns.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly AttachedProperty<int> ColumnSpanProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ColumnSpanProperty As AttachedProperty(Of Integer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ColumnSpanProperty: AttachedProperty<int>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Grid.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_AttachedProperty_1">AttachedProperty</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)

## Remarks
Default value for the property is `1`.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Grid">Grid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  


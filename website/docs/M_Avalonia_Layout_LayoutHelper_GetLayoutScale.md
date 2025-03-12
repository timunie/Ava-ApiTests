# GetLayoutScale Method


Obtains layout scale of the given control.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static double GetLayoutScale(
	Layoutable control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetLayoutScale ( 
	control As Layoutable
) As Double
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetLayoutScale : 
        control : Layoutable -> float 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs#L144" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a></td>
<td>Thrown when control has no root or returned layout scaling is invalid.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutHelper">LayoutHelper Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  


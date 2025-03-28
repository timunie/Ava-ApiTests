# ITableProvider Interface




## Definition
**Namespace:** <a href="N_Avalonia_Win32_Interop_Automation">Avalonia.Win32.Interop.Automation</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ComVisibleAttribute(true)]
[GuidAttribute("9c860395-97b3-490a-b52a-858cc22af166")]
[InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)]
public interface ITableProvider : IGridProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ComVisibleAttribute(true)>
<GuidAttribute("9c860395-97b3-490a-b52a-858cc22af166")>
<InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)>
Public Interface ITableProvider
	Inherits IGridProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ComVisibleAttribute(true)>]
[<GuidAttribute("9c860395-97b3-490a-b52a-858cc22af166")>]
[<InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)>]
type ITableProvider = 
    interface
        interface IGridProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Interop/Automation/ITableProvider.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Win32_Interop_Automation_IGridProvider">IGridProvider</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IGridProvider_ColumnCount">ColumnCount</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IGridProvider">IGridProvider</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IGridProvider_RowCount">RowCount</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IGridProvider">IGridProvider</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_ITableProvider_RowOrColumnMajor">RowOrColumnMajor</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_ITableProvider_GetColumnHeaders">GetColumnHeaders()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IGridProvider_GetItem">GetItem(Int32, Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IGridProvider">IGridProvider</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_ITableProvider_GetRowHeaders">GetRowHeaders()</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Win32_Interop_Automation">Avalonia.Win32.Interop.Automation Namespace</a>  


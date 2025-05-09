# IRawElementProviderFragmentRoot Interface




## Definition
**Namespace:** <a href="N_Avalonia_Win32_Interop_Automation">Avalonia.Win32.Interop.Automation</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ComVisibleAttribute(true)]
[GuidAttribute("620ce2a5-ab8f-40a9-86cb-de3c75599b58")]
[InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)]
public interface IRawElementProviderFragmentRoot : IRawElementProviderFragment, 
	IRawElementProviderSimple
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ComVisibleAttribute(true)>
<GuidAttribute("620ce2a5-ab8f-40a9-86cb-de3c75599b58")>
<InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)>
Public Interface IRawElementProviderFragmentRoot
	Inherits IRawElementProviderFragment, IRawElementProviderSimple
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ComVisibleAttribute(true)>]
[<GuidAttribute("620ce2a5-ab8f-40a9-86cb-de3c75599b58")>]
[<InterfaceTypeAttribute(ComInterfaceType.InterfaceIsIUnknown)>]
type IRawElementProviderFragmentRoot = 
    interface
        interface IRawElementProviderFragment
        interface IRawElementProviderSimple
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Interop/Automation/IRawElementProviderFragmentRoot.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>, <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple">IRawElementProviderSimple</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_BoundingRectangle">BoundingRectangle</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_FragmentRoot">FragmentRoot</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple_HostRawElementProvider">HostRawElementProvider</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple">IRawElementProviderSimple</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple_ProviderOptions">ProviderOptions</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple">IRawElementProviderSimple</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragmentRoot_ElementProviderFromPoint">ElementProviderFromPoint(Double, Double)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_GetEmbeddedFragmentRoots">GetEmbeddedFragmentRoots()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragmentRoot_GetFocus">GetFocus()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple_GetPatternProvider">GetPatternProvider(Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple">IRawElementProviderSimple</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple_GetPropertyValue">GetPropertyValue(Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderSimple">IRawElementProviderSimple</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_GetRuntimeId">GetRuntimeId()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_Navigate">Navigate(NavigateDirection)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment_SetFocus">SetFocus()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Win32_Interop_Automation_IRawElementProviderFragment">IRawElementProviderFragment</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Win32_Interop_Automation">Avalonia.Win32.Interop.Automation Namespace</a>  


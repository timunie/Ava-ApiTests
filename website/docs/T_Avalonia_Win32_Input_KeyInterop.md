# KeyInterop Class


Contains methods used to translate a Windows virtual/physical key to an Avalonia <a href="T_Avalonia_Input_Key">Key</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class KeyInterop
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class KeyInterop
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type KeyInterop = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Input/KeyInterop.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KeyInterop</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Win32_Input_KeyInterop_GetKeySymbol">GetKeySymbol(Int32, Int32)</a></td>
<td>Gets a key symbol from a Windows virtual-key and key data.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Input_KeyInterop_KeyFromVirtualKey">KeyFromVirtualKey(Int32, Int32)</a></td>
<td>Gets an Avalonia key from a Windows virtual-key and key data.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Input_KeyInterop_PhysicalKeyFromVirtualKey">PhysicalKeyFromVirtualKey(Int32, Int32)</a></td>
<td>Gets a physical Avalonia key from a Windows virtual-key and key data.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Win32_Input_KeyInterop_VirtualKeyFromKey">VirtualKeyFromKey(Key)</a></td>
<td>Gets a Windows virtual-key from an Avalonia key.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input Namespace</a>  


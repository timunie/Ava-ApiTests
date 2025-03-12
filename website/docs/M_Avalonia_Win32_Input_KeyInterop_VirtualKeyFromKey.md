# VirtualKeyFromKey Method


Gets a Windows virtual-key from an Avalonia key.



## Definition
**Namespace:** <a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static int VirtualKeyFromKey(
	Key key
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function VirtualKeyFromKey ( 
	key As Key
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member VirtualKeyFromKey : 
        key : Key -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Input/KeyInterop.cs#L464" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd>The Avalonia key.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
A Windows virtual-key code, or 0 if none matched.

## See Also


#### Reference
<a href="T_Avalonia_Win32_Input_KeyInterop">KeyInterop Class</a>  
<a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input Namespace</a>  


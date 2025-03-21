# KeyGestureFormatInfo Constructor


Provides platform specific formatting information for the KeyGesture class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public KeyGestureFormatInfo(
	IReadOnlyDictionary<Key, string>? platformKeyOverrides = null,
	string meta = "Cmd",
	string ctrl = "Ctrl",
	string alt = "Alt",
	string shift = "Shift"
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	Optional platformKeyOverrides As IReadOnlyDictionary(Of Key, String) = Nothing,
	Optional meta As String = "Cmd",
	Optional ctrl As String = "Ctrl",
	Optional alt As String = "Alt",
	Optional shift As String = "Shift"
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        ?platformKeyOverrides : IReadOnlyDictionary<Key, string> * 
        ?meta : string * 
        ?ctrl : string * 
        ?alt : string * 
        ?shift : string 
(* Defaults:
        let _platformKeyOverrides = defaultArg platformKeyOverrides null
        let _meta = defaultArg meta "Cmd"
        let _ctrl = defaultArg ctrl "Ctrl"
        let _alt = defaultArg alt "Alt"
        let _shift = defaultArg shift "Shift"
*)
-> KeyGestureFormatInfo
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Platform/KeyGestureFormatInfo.cs#L34" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary-2" target="_blank" rel="noopener noreferrer">IReadOnlyDictionary</a>(<a href="T_Avalonia_Input_Key">Key</a>, <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)  (Optional)</dt><dd>A dictionary of Key to String overrides for specific characters, for example Key.Left to "Left Arrow" or "←" on Mac. A null value is assumed to be the Invariant, so the included set of common overrides will be skipped if this is null. If only the common overrides are desired, pass an empty Dictionary instead.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The string to use for the Meta modifier, defaults to "Cmd"</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The string to use for the Ctrl modifier, defaults to "Ctrl"</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The string to use for the Alt modifier, defaults to "Alt"</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  (Optional)</dt><dd>The string to use for the Shift modifier, defaults to "Shift"</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo Class</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  


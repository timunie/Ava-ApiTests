# WinUICompositionBackdropCornerRadius Property


When <a href="P_Avalonia_Win32PlatformOptions_CompositionMode">CompositionMode</a> is set to <a href="T_Avalonia_Win32CompositionMode">WinUIComposition</a>, create rounded corner blur brushes If set to null the brushes will be created using default settings (sharp corners) This can be useful when you need a rounded-corner blurred Windows 10 app, or borderless Windows 11 app.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public float? WinUICompositionBackdropCornerRadius \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property WinUICompositionBackdropCornerRadius As Single?
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member WinUICompositionBackdropCornerRadius : Nullable<float32> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Win32PlatformOptions.cs#L142" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.single" target="_blank" rel="noopener noreferrer">Single</a>)

## See Also


#### Reference
<a href="T_Avalonia_Win32PlatformOptions">Win32PlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

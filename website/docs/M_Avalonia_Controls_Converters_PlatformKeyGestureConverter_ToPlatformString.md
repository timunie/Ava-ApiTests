# ToPlatformString Method


Converts a <a href="T_Avalonia_Input_KeyGesture">KeyGesture</a> to a string, formatting it according to the current platform's style guidelines.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static string ToPlatformString(
	KeyGesture gesture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ToPlatformString ( 
	gesture As KeyGesture
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ToPlatformString : 
        gesture : KeyGesture -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Converters/PlatformKeyGestureConverter.cs#L44" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_KeyGesture">KeyGesture</a></dt><dd>The gesture.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The gesture formatted according to the current platform.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_PlatformKeyGestureConverter">PlatformKeyGestureConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  


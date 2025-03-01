import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ToPlatformString Method


Converts a KeyGesture to a string, formatting it according to the current platform's style guidelines.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  KeyGesture</dt><dd>The gesture.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The gesture formatted according to the current platform.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_PlatformKeyGestureConverter">PlatformKeyGestureConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

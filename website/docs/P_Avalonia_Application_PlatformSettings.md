import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PlatformSettings Property


Represents a contract for accessing global platform-specific settings.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IPlatformSettings? PlatformSettings { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property PlatformSettings As IPlatformSettings
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member PlatformSettings : IPlatformSettings with get
```
</TabItem>
</Tabs>



#### Property Value
IPlatformSettingsPlatformSettings can be null only if application wasn't initialized yet. <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>'s <a href="P_Avalonia_Controls_TopLevel_PlatformSettings">PlatformSettings</a> is an equivalent API which should always be preferred over a global one, as specific top levels might have different settings set-up.

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IMountedVolumeInfoProvider Interface


Defines a platform-specific mount volumes info provider implementation.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IMountedVolumeInfoProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IMountedVolumeInfoProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IMountedVolumeInfoProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/Dialogs/IMountedVolumeInfoProvider.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Platform_IMountedVolumeInfoProvider_Listen">Listen(ObservableCollection(MountedVolumeInfo))</a></td>
<td>Listens to any changes in volume mounts and forwards updates to the referenced <a href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection-1" target="_blank" rel="noopener noreferrer">ObservableCollection(T)</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  

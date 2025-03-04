import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CreateNewAttachment(Func&lt;IPlatformHandle, IPlatformHandle&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
INativeControlHostControlTopLevelAttachment CreateNewAttachment(
	Func<IPlatformHandle, IPlatformHandle> create
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateNewAttachment ( 
	create As Func(Of IPlatformHandle, IPlatformHandle)
) As INativeControlHostControlTopLevelAttachment
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateNewAttachment : 
        create : Func<IPlatformHandle, IPlatformHandle> -> INativeControlHostControlTopLevelAttachment 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/INativeControlHostImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(IPlatformHandle, IPlatformHandle)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Controls_Platform_INativeControlHostControlTopLevelAttachment">INativeControlHostControlTopLevelAttachment</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Platform_INativeControlHostImpl">INativeControlHostImpl Interface</a>  
<a href="Overload_Avalonia_Controls_Platform_INativeControlHostImpl_CreateNewAttachment">CreateNewAttachment Overload</a>  
<a href="N_Avalonia_Controls_Platform">Avalonia.Controls.Platform Namespace</a>  

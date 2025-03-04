import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CreateNativeControlCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual IPlatformHandle CreateNativeControlCore(
	IPlatformHandle parent
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function CreateNativeControlCore ( 
	parent As IPlatformHandle
) As IPlatformHandle
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateNativeControlCore : 
        parent : IPlatformHandle -> IPlatformHandle 
override CreateNativeControlCore : 
        parent : IPlatformHandle -> IPlatformHandle 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/NativeControlHost.cs#L191" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  IPlatformHandle</dt><dd> </dd></dl>

#### Return Value
IPlatformHandle

## See Also


#### Reference
<a href="T_Avalonia_Controls_NativeControlHost">NativeControlHost Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

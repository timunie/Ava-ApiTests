import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScreenFromTopLevelCore Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual Screen? ScreenFromTopLevelCore(
	ITopLevelImpl topLevel
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function ScreenFromTopLevelCore ( 
	topLevel As ITopLevelImpl
) As Screen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ScreenFromTopLevelCore : 
        topLevel : ITopLevelImpl -> Screen 
override ScreenFromTopLevelCore : 
        topLevel : ITopLevelImpl -> Screen 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_Screen">Screen</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_ScreensBase_2">ScreensBase(TKey, TScreen) Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
